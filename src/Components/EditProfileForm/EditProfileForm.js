import React, { Component } from 'react';
import './EditProfileForm.scss';

export default class EditProfileForm extends Component {
  state = {
    email: this.props.email,
    address: this.props.address,
    phone: this.props.phone,
    dob: this.props.dob,
    securityOne: this.props.securityOne,
    securityTwo: this.props.securityTwo,
    securityThree: this.props.securityThree,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleUpdateProfile = async () => {
    const { handleUpdateProfile } = this.props;
    const stateKeys = Object.keys(this.state);
    stateKeys.forEach((property) => {
      if(this.state[property] !== this.props[property]) {
        const newValue = this.state[property];
        handleUpdateProfile(property, newValue);
      }
    });
  }

  render() {
    const { email, address, phone, dob, securityOne, securityTwo, securityThree } = this.state;
    const { toggleShowEditProfile } = this.props;
    return (
      <section id="edit-profile-form">
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
