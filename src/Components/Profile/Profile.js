import React, { Component } from 'react';
import './Profile.scss';
import { Link } from 'react-router-dom';
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
      handleUpdateProfile,
      handleUpdateProfileImg, 
    } = this.props;

    return (
      <section id="profile-container">
        <Link to="/">Go Back</Link>
        <h3>Profile</h3>
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
          photoURL={photoURL}
          securityOne={securityOne}
          securityTwo={securityTwo}
          securityThree={securityThree}
          toggleShowEditProfile={this.toggleShowEditProfile}
          handleUpdateProfile={handleUpdateProfile}
          handleUpdateProfileImg={handleUpdateProfileImg}
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

