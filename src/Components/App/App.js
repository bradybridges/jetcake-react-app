import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../Header/Header';
import Login from '../Login/Login';
import * as firebase from 'firebase';
import 'firebase/auth';
import ApiKeys from '../../ApiKeys';

class App extends Component {
  state = {
    showLogin: false,
    user: null,
  }

  componentDidMount = () => {
    if(!firebase.apps.length) firebase.initializeApp(ApiKeys.FirebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  toggleShowLogin = () => {
    const toggledState = !this.state.showLogin;
    this.setState({ showLogin: toggledState });
  }

  handleLogout = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header toggleShowLogin={this.toggleShowLogin} user={this.state.user} handleLogout={this.handleLogout} />
            {this.state.showLogin && <Login toggleShowLogin={this.toggleShowLogin} />}
          </Route>
          <Route path="/create">
            <h1>Create An Account</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
            <Login />
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
