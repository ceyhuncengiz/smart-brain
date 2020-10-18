# Smart Brain:Face Recognition App

The project can be accessed here: [Smart Brain Face Recognition App](https://ceyhuncengiz.github.io/smart-brain/)  
The API itself can be accessed here: [Smart Brain API](https://github.com/ceyhuncengiz/smart-brain-api)  

This project uses HTML, CSS, and Javascript + React for the front-end and a NodeJs/Express + PostgreSQL server and database configuration for the back-end. It pings the [Clarifai API](https://clarifai.com) for face detection in photographs and displays the image with a bounding box around the faces that it detects.

This repository contains the front-end portion of the application while the back-end portion is contained in the repository [smart-brain-api](https://github.com/ceyhuncengiz/smart-brain-api).

## Front-End
The front-end login page of the application looks like this:  

<img src="https://i.ibb.co/h7ws6hL/smartbrainsignin.png" />

There are also registration capabilities so that users can sign up.  

<img src="https://i.ibb.co/4JJ5h7M/smartbrainregister.png" />

Once the user is signed in, the following view is shown:

<img src="https://i.ibb.co/cc0MBvc/smartbrainmenu.png" />

The front-end application is written in React and consists of a main App container which renders all other components. This App container has access to a state which contains input (for the search box), imageUrl(the URL entered into the searchbox), bounding box coordinates, the name of the current view page, the sign in status of a user, and the user currently signed in with information such as id, name, email, number of photos detected, and the date joined.  

Additionally, the Signin and Register components are also containers which contain states for their text inputs such as name, email, and password for the Register form, and email and password for the Signin form. These pass state in the form of update functions which detect what the inputs are in the textbox and render the respective Signin and Register form components into the App container. When the user is signed in, the user state is set to the current user and all of their information is fed to the various components to display all of the personalized data such as their image count, their name, and a "Sign Out" link instead of a "Sign In" or "Register" link.

The App component contains several functions that set the state of different parts of the application. The main routing function dictates which components are displayed. For example, if the routing state is set to 'home', the navigation bar, image search box/button, image search rank, and face recognition components are displayed. if the routing state is set to 'signin', the signin form component is displayed.  

When a user inputs a URL into the search field and presses "Detect", the image shows up below the search field and a blue bounding box is calculated based on data returned from the face detection API.

<img src="https://i.ibb.co/fHkhvhH/smartbrain.png" />

This button of the ImageSearch component has an attached function which stores the image URL and sends this in a request to the Clarifai API. The result is a set of four coordinates of a bounding box which are used to calculate the boundaries of the face on the actual image, thus displaying the FaceRecognition component which consists of an image and the blue bounding box.

---

# smart-brain
