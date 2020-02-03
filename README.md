# Jetcake-React-App

### Getting Started

You must have node and npm installed on your local machine. This is used to install all of the dependencies of the application. To install these packages, just install node, which includes an installation of npm.

```bash
brew install node
```
1. Clone down this repo.
1. Then install the library dependencies. Run:

```bash
npm install
```
1. To verify that it is setup correctly, run `expo start` in your terminal. Expo should open a page in your browser.
1. To run the application install expo from Google Play Store or App Store
1. Open Expo on your phone and scan the QR code in your browser
1. The application should open on your device

### Project Installation

1. First clone down this repo
  - From your terminal run ` git clone https://github.com/bradybridges/jetcake-react-app.git`

2. cd into the project from your terminal by running `cd jetcake-react-app`

3. Install project dependencies by running `npm install`

In order to try to help keep my API credentials more concealed my environment variable are not included in the repository. For the application to function you must add a `.env.development` file to the root of the application. To do this follow the steps below.

1. From the root directory of the project in your terminal run `touch .env.development`

2. Paste the following code into the `.env.development` configuration file
``` 
REACT_APP_API_KEY=AIzaSyAMld5qG3_OC36t_-x6WKcL7ZbjtJw95Ag
REACT_APP_AUTH_DOMAIN=jetcake-react-app-a96c4.firebaseapp.com
REACT_APP_DATABASE_URL=https://jetcake-react-app-a96c4.firebaseio.com
REACT_APP_PROJECT_ID=jetcake-react-app-a96c4
REACT_APP_STORAGE_BUCKET=jetcake-react-app-a96c4.appspot.com
REACT_APP_MESSAGING_SENDER_ID=685559858753
REACT_APP_APP_ID=1:685559858753:web:bca71095befc226f3a28c0
```

***The application should now be configured and ready to start. To run the application type `npm start` from your terminal.***



### Running the tests

1. To run the tests for the application run `npm run test` from the root directory of the project

### Work Flow
* [Project Board](https://github.com/bradybridges/jetcake-react-app/projects/1)
* [PR Template](https://github.com/bradybridges/jetcake-react-app/blob/master/docs/PULL_REQUEST_TEMPLATE.md)

### Built With
#### Front-End
* [React](https://reactjs.org/) 
* [SASS](https://sass-lang.com/)
* [Jest](https://jestjs.io/)
* [Enzyme](https://airbnb.io/enzyme/)

#### Back-End
* [Python](https://www.python.org/)

### Authors
* [Brady Bridges](https://github.com/bradybridges)

### Screenshots / Gif
![]()
