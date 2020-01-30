import React, { Component } from 'react';
import ProfileInformation from '../ProfileInformation/ProfileInformation';
const editImg = require('../../Assets/edit.png');

export default class Profile extends Component{
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
        <div id="edit-btn-container" style={{backgroundColor: 'black'}}>
          <img src={editImg} alt="edit" />
        </div>
        <ProfileInformation 
          email={email}
          address={address}
          phone={phone}
          dob={dob}
          securityOne={securityOne}
          securityTwo={securityTwo}
          securityThree={securityThree}
        />
      </section>
    );
  }
}

{/* <table>
<tbody>
  <tr>
    <td>Email</td>
    <td>{email}</td>
  </tr>
  <tr>
    <td>Address</td>
    <td>{address}</td>
  </tr>
  <tr>
    <td>Phone Number</td>
    <td>{phone}</td>
  </tr>
  <tr>
    <td>Birthday</td>
    <td>{dob}</td>
  </tr>
  <tr>
    <td>Mother's maiden name?</td>
    <td>{securityOne}</td>
  </tr>
  <tr>
    <td>Name of first pet?</td>
    <td>{securityTwo}</td>
  </tr>
  <tr>
    <td>City where you grew up?</td>
    <td>{securityThree}</td>
  </tr>
</tbody>
</table> */}
