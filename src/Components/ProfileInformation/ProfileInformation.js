import React from 'react';

export default function ProfileInformation({ email, address, phone, dob, securityOne, securityTwo, securityThree }) {
  return (
    <table>
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
    </table>
  );
}
