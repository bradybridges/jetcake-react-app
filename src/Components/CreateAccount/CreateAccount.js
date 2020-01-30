import React, { Component } from 'react';
import './CreateAccount.scss';
import * as firebase from 'firebase';
import 'firebase/auth';

export default class CreateAccount extends Component {
  state = {
    email: "",
    phone: "",
    dob: "",
    profile: "",
    address: "",
    securityOne: "",
    securityTwo: "",
    securityThree: "",
    password: "",
    passwordConfirm: "",
    error: null,
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  verifyPasswords = () => {
    const { password, passwordConfirm } = this.state;
    if((password === passwordConfirm) && (password !== "" && passwordConfirm !== "")) return true;
    return false;
  }

  verifyFormCompletion = () => {
    const { 
      email, 
      password, 
      passwordConfirm, 
      address, 
      phone, 
      profile, 
      dob, 
      securityOne, 
      securityTwo, 
      securityThree
    } = this.state;
    const requiredInfo = [
      email, 
      password, 
      passwordConfirm, 
      address, 
      phone, 
      profile, 
      dob, 
      securityOne, 
      securityTwo, 
      securityThree
    ];
    let completed = true;
    requiredInfo.forEach((field) => {
      if(field === "") {
        completed = false;
      }
    });
    return completed;
  }

  updateProfile = () => {

  }

  handleCreateAccount = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      if(!this.verifyPasswords()) {
        this.setState({ error: "Passwords don't match" });
        return;
      } else if(!this.verifyFormCompletion()) {
        this.setState({ error: "Please fill in all fields" });
        return;
      }
      const newUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
      
      console.log(newUser);
    } catch(error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { toggleShowCreateAccount } = this.props;
    return (
      <form id="create-account-form" onSubmit={this.handleCreateAccount}>
        {this.state.error && <h3>{this.state.error}</h3>}
        <label>Email</label>
        <input name="email" onChange={this.handleChange} type="email" value={this.state.email}/>
        <label>Password</label>
        <input type="password" onChange={this.handleChange} name="password" value={this.state.password}/>
        <label>Confirm Password</label>
        <input type="password" onChange={this.handleChange} name="passwordConfirm" value={this.state.passwordConfirm}/>
        <label>Phone Number</label>
        <input name="phone" onChange={this.handleChange} type="text" value={this.state.phone}/>
        <label>Date of Birth</label>
        <input name="dob" onChange={this.handleChange} type="date" value={this.state.dob}/>
        <label>Profile Picture</label>
        <input name="profile" onChange={this.handleChange} type="file" value={this.state.profile}/>
        <label>Address</label>
        <input name="address" onChange={this.handleChange} type="text" value={this.state.address}/>
        <section id="security-questions-container">
          <span>Mothers Maiden Name?</span>
          <input name="securityOne" onChange={this.handleChange} type="text" value={this.state.securityOne}/>
          <span>First Pet's Name?</span>
          <input name="securityTwo" onChange={this.handleChange} type="text" value={this.state.securityTwo}/>
          <span>Town where you grew up?</span>
          <input name="securityThree" onChange={this.handleChange} type="text" value={this.state.securityThree}/>
        </section>
        <section id="submission-container">
          <button type="submit">Submit</button>
          <button onClick={toggleShowCreateAccount}>Cancel</button>
        </section>
      </form>
    )
  }
}