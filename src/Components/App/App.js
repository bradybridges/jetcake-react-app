import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/create">
          <h1>Create An Account</h1>
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        <Route path="/profile">
          <h1>Profile</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
