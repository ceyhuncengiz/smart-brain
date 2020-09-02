# SmartBrain Image

The project can be accessed here: [Smart Brain Face Recognition App](https://smart-brain-2020-v1.herokuapp.com/)  
The API itself can be accessed here: [Smart Brain API](https://smart-brain-2020-v1.herokuapp.com/)  

This project uses HTML, CSS, and Javascript + React for the front-end and a NodeJs/Express + PostgreSQL server and database configuration for the back-end. It pings the [Clarifai API](https://clarifai.com) for face detection in photographs and displays the image with a bounding box around the faces that it detects.

This repository contains the front-end portion of the application while the back-end portion is contained in the repository [smart-brain-api](https://github.com/ceyhuncengiz/smart-brain-api).

## Front-End
The front-end login page of the application looks like this:  

<img src="https://drive.google.com/file/d/1AhJdxbDB7kqPD3nCHyFbUVz4DcI1elwm/view?usp=sharing" />

There is also registration capabilities so that users that are new to the page can sign up.  

Once the user is signed in, the following view is shown:

<img src="https://drive.google.com/file/d/1jYzdFeWewXNzLTR7eAuijJJjQ_sgMTJN/view?usp=sharing" />

The front-end application is written in React and consists of a main App container which renders all other components. This App container has access to a state which contains input (for the search box), imageUrl(the URL entered into the searchbox), bounding box coordinates, the name of the current view page, the sign in status of a user, and the user currently signed in with information such as id, name, email, number of photos detected, and the date joined.  

Additionally, the Signin and Register components are also containers which contain states for their text inputs such as name, email, and password for the Register form, and email and password for the Signin form. These pass state in the form of update functions which detect what the inputs are in the textbox and render the respective Signin and Register form components into the App container. When the user is signed in, the user state is set to the current user and all of their information is fed to the various components to display all of the personalized data such as their image count, their name, and a "Sign Out" link instead of a "Sign In" or "Register" link.

The App component contains several functions that set the state of different parts of the application. The main routing function dictates which components are displayed. For example, if the routing state is set to 'home', the navigation bar, image search box/button, image search rank, and face recognition components are displayed. if the routing state is set to 'signin', the signin form component is displayed.  

When a user inputs a URL into the search field and presses "Detect", the image shows up below the search field and a blue bounding box is calculated based on data returned from the face detection API.

<img src="https://drive.google.com/file/d/1_iaS6cZtcyq4JYFDFAA4aaZJZu0KYyDM/view?usp=sharing" />

This button of the ImageSearch component has an attached function which stores the image URL and sends this in a request to the Clarifai API. The result is a set of four coordinates of a bounding box which are used to calculate the boundaries of the face on the actual image, thus displaying the FaceRecognition component which consists of an image and the blue bounding box.

---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# smart-brain
