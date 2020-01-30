import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../Header/Header';
import Login from '../Login/Login';
import CreateAccount from '../CreateAccount/CreateAccount';
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

  toggleShowLogin = () => {
    const toggledState = !this.state.showLogin;
    this.setState({ showLogin: toggledState });
  }

  toggleShowCreateAccount = () => {
    const toggledState = !this.state.showCreateAccount;
    this.setState({ showCreateAccount: toggledState });
  }

  handleLogout = () => {
    firebase.auth().signOut();
    this.setState({ user: null, profile: null });
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
        this.setState({ profile: doc.data() });
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header toggleShowCreateAccount={this.toggleShowCreateAccount} toggleShowLogin={this.toggleShowLogin} user={this.state.user} handleLogout={this.handleLogout} />
            {this.state.showLogin && <Login toggleShowLogin={this.toggleShowLogin} />}
            {this.state.showCreateAccount && <CreateAccount toggleShowCreateAccount={this.toggleShowCreateAccount}/>}
          </Route>
          <Route path="/profile">
            <h1>Profile</h1>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
