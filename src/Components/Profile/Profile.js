import React, { Component } from 'react';
import ProfileInformation from '../ProfileInformation/ProfileInformation';
import EditProfileForm from '../EditProfileForm/EditProfileForm';
const editImg = require('../../Assets/edit.png');

export default class Profile extends Component{
  state = {
    showEditProfile: false,
  }

  toggleShowEditProfile = () => {
    const updatedState = !this.state.showEditProfile;
    this.setState({ showEditProfile: updatedState });
  }

  render() {
    const {
      email, 
      address, 
      phone, 
      dob, 
      securityOne, 
      securityTwo, 
      securityThree, 
      photoURL, 
      handleUpdateProfile 
    } = this.props;

    return (
      <section id="profile-container">
        <img id="profile-img" src={photoURL} alt="profile" />
        <div 
          id="edit-btn-container" 
          style={{backgroundColor: 'black'}}
          onClick={() => this.setState({ showEditProfile: true })}
        >
          <img src={editImg} alt="edit" />
        </div>
        {this.state.showEditProfile && <EditProfileForm 
          email={email}
          address={address}
          phone={phone}
          dob={dob}
          securityOne={securityOne}
          securityTwo={securityTwo}
          securityThree={securityThree}
          toggleShowEditProfile={this.toggleShowEditProfile}
          handleUpdateProfile={handleUpdateProfile}
        />}
        { !this.state.showEditProfile && <ProfileInformation 
          email={email}
          address={address}
          phone={phone}
          dob={dob}
          securityOne={securityOne}
          securityTwo={securityTwo}
          securityThree={securityThree}
        />
        }
      </section>
    );
  }
}

