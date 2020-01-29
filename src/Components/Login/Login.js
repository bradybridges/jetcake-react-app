import React, { Component } from 'react';
import './Login.scss';

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLogin = () => {

  }

  render() {
    const { toggleShowLogin } = this.props;
    return (
      <section className="login-form">
        <label>Email</label>
        <input 
          name="email" 
          type="text" 
          value={this.state.email} 
          onChange={this.handleChange}
        />
        <label>Password</label>
        <input 
          name="password" 
          type="password" 
          value={this.state.password} 
          onChange={this.handleChange}
        />
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={toggleShowLogin}>Cancel</button>
      </section>
    )
  }
}

