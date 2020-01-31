import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../Header/Header';
import Login from '../Login/Login';
import CreateAccount from '../CreateAccount/CreateAccount';
import Profile from '../Profile/Profile';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import ApiKeys from '../../ApiKeys';

class App extends Component {
  state = {
    showLogin: false,
    showCreateAccount: false,
    user: null,
    profile: null,
    profileID: null,
  }

  componentDidMount = () => {
    if(!firebase.apps.length) firebase.initializeApp(ApiKeys.FirebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ user });
        this.getProfile(user);
      } else {
        this.setState({ user: null });
      }
    })
  }

  toggleShowLogin = ( toggledState = !this.state.showLogin) => {
    this.setState({ showLogin: toggledState, showCreateAccount: false });
  }

  toggleShowCreateAccount = (toggledState = !this.state.showCreateAccount) => {
    this.setState({ showCreateAccount: toggledState, showLogin: false });
  }

  handleLogout = () => {
    firebase.auth().signOut();
    this.setState({ user: null, profile: null });
  }

  handleUpdateProfileImg = async (image) => {
    try {
      const user = await firebase.auth().currentUser;
      await firebase.storage().ref(user.email).child('profile.jpg').delete();
      await firebase.storage().ref(`${user.email}/profile.jpg`).put(image);
      const photoURL = await firebase.storage().ref(user.email).child('profile.jpg').getDownloadURL();
      await user.updateProfile({
        photoURL,
      });
      this.setState({ user });
    } catch(error) {
      this.setState({ error: error.message });
    }
  }

  getProfile = async (user) => {
    const { email } = user;
    const profileQuery = firebase.firestore().collection('profiles').where('email', '==', email);
    profileQuery.get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }  
  
      snapshot.forEach(doc => {
        this.setState({ profile: doc.data(), profileID: doc.id });
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }

  handleUpdateProfile = async (profileProperty, value) => {
    const { profileID } = this.state;
    try {
      await firebase.firestore().collection('profiles').doc(profileID)
        .update({[profileProperty]: value });
      const user = await firebase.auth().currentUser;
      if(profileProperty === 'email') {
        await user.updateEmail(value);
      }
      await this.getProfile(user);
    } catch(error) {
      this.setState({ error: "Please log out and lock back in to change email address" });
    }
  }

  setProfile = (email, address, phone, profile, dob, securityOne, securityTwo, securityThree) => {
    const newProfile = {
      email,
      address,
      phone, 
      profile,
      dob,
      securityOne,
      securityTwo,
      securityThree,
    };
    this.setState({ profile: newProfile });
  }

  render() {
    const { profile } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header toggleShowCreateAccount={this.toggleShowCreateAccount} toggleShowLogin={this.toggleShowLogin} user={this.state.user} handleLogout={this.handleLogout} />
            {this.state.profile && <h3>Welcome, {profile.email}</h3>}
            {this.state.showLogin && <Login toggleShowLogin={this.toggleShowLogin} />}
            {this.state.showCreateAccount && <CreateAccount toggleShowCreateAccount={this.toggleShowCreateAccount} setProfile={this.setProfile}/>}
          </Route>
          {(this.state.profile && this.state.user) && 
            <Route path="/profile">
              <Profile
                photoURL={this.state.user.photoURL} 
                address={profile.address} 
                dob={profile.dob} 
                email={profile.email} 
                phone={profile.phone}
                securityOne={profile.securityOne}
                securityTwo={profile.securityTwo}
                securityThree={profile.securityThree}
                handleUpdateProfile={this.handleUpdateProfile}
                handleUpdateProfileImg={this.handleUpdateProfileImg}
              />
            </Route>
          }
        </Switch>
      </div>
    );
  }
}

export default App;
