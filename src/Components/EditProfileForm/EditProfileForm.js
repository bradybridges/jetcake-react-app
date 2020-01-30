import React, { Component } from 'react';

export default class EditProfileForm extends Component {
  state = {
    email: this.props.email,
    address: this.props.address,
    phone: this.props.phone,
    dob: this.props.dob,
    securityOne: this.props.securityOne,
    securityTwo: this.props.securityTwo,
    securityThree: this.props.securityThree,
  }

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
    return (
      <section id="edit-profile-form">
        <label>Email</label>
        <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
        <label>Address</label>
        <input name="address" type="text" value={this.state.address} onChange={this.handleChange} />
        <label>Phone</label>
        <input name="phone" type="text" value={this.state.phone} onChange={this.handleChange} />
        <label>Birthday</label>
        <input name="dob" type="text" value={this.state.dob} onChange={this.handleChange} />
        <label>Mother's maiden name?</label>
        <input name="securityOne" type="text" value={this.state.securityOne} onChange={this.handleChange} />
        <label>Name of first pet?</label>
        <input name="securityTwo" type="text" value={this.state.securityTwo} onChange={this.handleChange} />
        <label>City you grew up in?</label>
        <input name="securityThree" type="text" value={this.state.securityThree} onChange={this.handleChange} />
        <button onClick={this.handleUpdateProfile}>Save Profile</button>
        <button onClick={this.props.toggleShowEditProfile}>Cancel</button>
      </section>
    );
  }
}
