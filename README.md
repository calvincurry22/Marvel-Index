## MARVEL INDEX
Marvel Index was created to give Marvel comic book readers the ability
to keep track of comics that they want to read without being forced to
immediately make a purchase decision. It is a full CRUD app that allows
users to search for comics from their favorite characters and save them
to a personalized reading list that can be accessed at any time. Once a
comic from the user's list has been read, it can be removed and stored
on a separate list that keeps track of all comics that the user has read
over time. Users can also have discussions with each other about
topics of their choosing on the forum component within the app.

## Technologies Used
- ReactJS using "hooks" for application build
- React Router
- JSON Server
- Cloudinary (for image uploading)
- ReactStrap and Material UI for component design
- Marvel API for character/comic data


## App Setup: Follow these steps exactly

1. Clone this repository onto your local machine. 
2. `cd ` into the directory that this project creates. 
3. In the project directory, run `npm start` to view the app in the browser at `http://localhost:3000`.
4. Open another terminal tab and cd to the api sub-directory (src/components/api)
5. Serve json database using json-server -p 8090 -w database.json
6. Open the broswer to now view the functioning app. 


## Navigating the App

1. First click on the `Sign Up` button to register your first account
2. Enter your information then click the `Register` button - this will log you into Marvel-Index
3. Explore our features:
- The main page is `My List`. This is where your saved comics will appear. Once you add a comic to this list, you can either mark it as "read" or delete it from the list. 
- The `Explore Comics` page is where you can search for comics by character. Type a name into the search bar, or scroll through the character list to select a character. Once you have selected a character, you will view that character's profile and then can select comics to add to your reading list.
- The `Read Comics` page keeps track of your comic reading history. If you have comics stored on your reading list that you've completed, click the `Mark as Read` button to create a record of that comic on this page to be tracked. 
- Chat with other users by navigating to the `Forum`. Within the forum, select a discussion topic that you're interested in. From there, you can view all user messages related to that topic, and can enter your own messages to join the conversation! If you don't see a forum topic that you want to join, you can create your own by clicking the `Create Topic` button. 
- Head over to the `Account` page if you need to update any of your existing account information, such as name, username, email, password, or profile picture. 


##

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
