import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Signin from './components/Signin/Signin.js';
import Register from './components/Register/Register.js'
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import './App.css';

const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: '8f8d825b5a03438bbaf770b0a577ae5e'
 });


const particlesOptions = {
    particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 300
          }
        }
      }
    }

const initialState = {
    input: '',
    imageUrl: '',
    box: [],
    route: 'signin',
    isSignedIn: false,
    user: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined

    }})
  }
 

  

  calculateFaceLocation = (data, i) => {
    let clarifaiFace = data.outputs[0].data.regions[i].region_info.bounding_box;
    let image = document.getElementById('inputimage');
    let width = Number(image.width);
    let height = Number(image.height);
    return {
      leftcol: clarifaiFace.left_col * width,
      toprow: clarifaiFace.top_row * height,
      rightcol: width - (clarifaiFace.right_col * width),
      bottomrow: height - (clarifaiFace.bottom_row * height)
    }
}

  displayFaceBox = (box) => {
  this.setState({
    box: [...this.state.box, box]
  });
}

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  } 
  
  onButtonSubmit = () => {
    this.setState({
      box: [],
      imageUrl: this.state.input,
      showImage: true
    });
    app.models.predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(response => {
        for(let i = 0; i < response.outputs[0].data.regions.length; i++){
          this.displayFaceBox(this.calculateFaceLocation(response, i))
        }
      })
      .then(response => {
        if (response) {
          fetch('https://morning-earth-99743.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            id: this.state.user.id
             })
           }) 
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, {entries: count}))
          })
          .catch(console.log)

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(console.log)
    }
  

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})


    }
    this.setState({route: route});
  }

render() {
  const {isSignedIn, imageUrl, route, box} = this.state
  return ( <div className="App">
      <Particles className='particles'
              params={particlesOptions}
            />
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
      { route === 'home' 
      ? <div>
            <Logo />
            <Rank loadUser={this.loadUser} name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition box={box} imageUrl={imageUrl}/>
        </div>
        :(
           route === 'signin'
          ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
         )
      }

    </div>
  );
}
}
 
export default App;
