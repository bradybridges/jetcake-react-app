import React, { Component } from 'react';
import './Login.scss';
import * as firebase from 'firebase';
import 'firebase/auth';

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    error: null,
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLogin = async () => {
    const { email, password } = this.state;
    const { toggleShowLogin } = this.props;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      toggleShowLogin(false);
    } catch(error) {
      this.setState({ error, email: "", password: "" });
      console.error(error);
    }
  }

  render() {
    const { toggleShowLogin } = this.props;
    if(this.state.error) {
      setTimeout(() => {
        this.setState({ error: null });
      }, 2500);
    }
    return (
      <form className="login-form" onSubmit={this.handleLogin}>
        {this.state.error && <p id="error-msg">{this.state.error.message}</p>}
        <label className="input-label">Email</label>
        <input 
          name="email" 
          type="text" 
          value={this.state.email} 
          onChange={this.handleChange}
          className="input-field"
        />
        <label className="input-label">Password</label>
        <input 
          name="password" 
          type="password" 
          value={this.state.password} 
          onChange={this.handleChange}
          className="input-field"
        />
        <section className="form-btn-container">
          <button className="form-btn" onClick={this.handleLogin}>Login</button>
          <button className="form-btn" onClick={toggleShowLogin}>Cancel</button>
        </section>
      </form>
    )
  }
}

