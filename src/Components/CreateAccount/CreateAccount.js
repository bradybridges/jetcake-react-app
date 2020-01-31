import React, { Component } from 'react';
import './CreateAccount.scss';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

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

  handleCreateAccount = async (e) => {
    e.preventDefault();
    const { toggleShowCreateAccount } = this.props;
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
      await this.handleProfilePictureUpload(newUser);
      await this.handleAddProfile();
      toggleShowCreateAccount();
    } catch(error) {
      this.setState({ error: error.message });
    }
  }

  handleAddProfile = async () => {
    const { 
      email, 
      address, 
      phone, 
      dob, 
      securityOne, 
      securityTwo, 
      securityThree
    } = this.state;
    await firebase.firestore().collection('profiles').add({
      email, 
      address, 
      phone, 
      dob, 
      securityOne, 
      securityTwo, 
      securityThree 
    });
  }

  handleImgChange = (e) => {
    if(e.target.files[0]) {
      this.setState ({ profile: e.target.files[0] });
    }
  }

  handleProfilePictureUpload = async (newUser) => {
    const { email } = newUser.user;
    const { profile } = this.state;
    try {
      await firebase.storage().ref(`${email}/profile.jpg`).put(profile);
      const url = await firebase.storage().ref(email).child('profile.jpg').getDownloadURL();
      console.log(url);
      this.updateProfilePicture(url);
    } catch(error) {
      console.error('Upload Error', error);
    }
  }

  updateProfilePicture = async (photoURL) => {
    const user = await firebase.auth().currentUser;
    await user.updateProfile({
      photoURL
    });
  }

  render() {
    const { toggleShowCreateAccount } = this.props;
    return (
      <form id="create-account-form" onSubmit={this.handleCreateAccount}>
        <h3>Create An Account</h3>
        {this.state.error && <h3>{this.state.error}</h3>}
        <label className="input-label">Email</label>
        <input className="input-field" name="email" onChange={this.handleChange} type="email" value={this.state.email}/>
        <label className="input-label">Password</label>
        <input className="input-field" type="password" onChange={this.handleChange} name="password" value={this.state.password}/>
        <label className="input-label">Confirm Password</label>
        <input className="input-field" type="password" onChange={this.handleChange} name="passwordConfirm" value={this.state.passwordConfirm}/>
        <label className="input-label">Phone Number</label>
        <input className="input-field" name="phone" onChange={this.handleChange} type="text" value={this.state.phone}/>
        <label className="input-label">Date of Birth</label>
        <input className="input-field" name="dob" onChange={this.handleChange} type="date" value={this.state.dob}/>
        <label className="input-label">Profile Picture</label>
        <input className="input-field" name="profile" onChange={this.handleImgChange} type="file" />
        <label className="input-label">Address</label>
        <input className="input-field" name="address" onChange={this.handleChange} type="text" value={this.state.address}/>
        <section id="security-questions-container">
          <label className="input-label">Mothers Maiden Name?</label>
          <input className="input-field" name="securityOne" onChange={this.handleChange} type="text" value={this.state.securityOne}/>
          <label className="input-label">First Pet's Name?</label>
          <input className="input-field" name="securityTwo" onChange={this.handleChange} type="text" value={this.state.securityTwo}/>
          <label className="input-label">Town where you grew up?</label>
          <input className="input-field" name="securityThree" onChange={this.handleChange} type="text" value={this.state.securityThree}/>
        </section>
        <section id="submission-container">
          <button className="form-btn" type="submit">Submit</button>
          <button className="form-btn" onClick={toggleShowCreateAccount}>Cancel</button>
        </section>
      </form>
    )
  }
}