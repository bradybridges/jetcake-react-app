import React, { Component } from 'react';
import './EditProfileForm.scss';
import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/auth';

export default class EditProfileForm extends Component {
  state = {
    email: this.props.email,
    address: this.props.address,
    phone: this.props.phone,
    dob: this.props.dob,
    securityOne: this.props.securityOne,
    securityTwo: this.props.securityTwo,
    securityThree: this.props.securityThree,
    photoURL: this.props.photoURL,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleUpdateProfile = async () => {
    const { handleUpdateProfile, handleUpdateProfileImg, toggleShowEditProfile } = this.props;
    const stateKeys = Object.keys(this.state);
    stateKeys.forEach((property) => {
      if(this.state[property] !== this.props[property] && property !== "photoURL") {
        const newValue = this.state[property];
        handleUpdateProfile(property, newValue);
      }
      if(property === 'photoURL' && this.state[property] !== this.props[property]) {
        const image = this.state.photoURL;
        handleUpdateProfileImg(image);       
      }
    });
    toggleShowEditProfile(false);
  }

  render() {
    const { email, address, phone, dob, securityOne, securityTwo, securityThree } = this.state;
    const { toggleShowEditProfile } = this.props;
    return (
      <section id="edit-profile-form">
        <label className="input-label">Profile Picture</label>
        <input className="input-field" type="file" onChange={(e) => this.setState({ photoURL: e.target.files[0]})}/>
        <label className="input-label">Email</label>
        <input className="input-field" name="email" type="text" value={email} onChange={this.handleChange} />
        <label className="input-label">Address</label>
        <input className="input-field" name="address" type="text" value={address} onChange={this.handleChange} />
        <label className="input-label">Phone</label>
        <input className="input-field" name="phone" type="text" value={phone} onChange={this.handleChange} />
        <label className="input-label">Birthday</label>
        <input className="input-field" name="dob" type="text" value={dob} onChange={this.handleChange} />
        <label className="input-label">Mother's maiden name?</label>
        <input className="input-field" name="securityOne" type="text" value={securityOne} onChange={this.handleChange} />
        <label className="input-label">Name of first pet?</label>
        <input className="input-field" name="securityTwo" type="text" value={securityTwo} onChange={this.handleChange} />
        <label className="input-label">City you grew up in?</label>
        <input className="input-field" name="securityThree" type="text" value={securityThree} onChange={this.handleChange} />
        <section id="save-profile-btn-container">
          <button className="form-btn" onClick={this.handleUpdateProfile}>Save Profile</button>
          <button className="form-btn" onClick={toggleShowEditProfile}>Cancel</button>
        </section>
      </section>
    );
  }
}
