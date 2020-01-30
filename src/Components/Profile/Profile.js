import React from 'react';

export default function Profile({ email, address, phone, dob, securityOne, securityTwo, securityThree, photoURL }) {
  return (
    <section id="profile-container">
      <h2>Profile</h2>
      <img src={photoURL} alt="user profile" />
      <section id="email-container">
        <label>Email</label>
        <p>{email}</p>
        <button>Change</button>
      </section>
      <section id="address-container">
        <label>address</label>
        <p>{address}</p>
        <button>Change</button>
      </section>
      <section id="phone-container">
        <label>Phone</label>
        <p>{phone}</p>
        <button>Change</button>
      </section>
      <section id="date-of-birth-container">
        <label>Date of Birth</label>
        <p>{dob}</p>
        <button>Change</button>
      </section>
      <section id="security-one-container">
        <p>Mother's maiden name?</p>
        <label>Answer</label>
        <p>{securityOne}</p>
        <button>Change</button>
      </section>
      <section id="security-two-container">
        <p>Name of first pet?</p>
        <label>Answer</label>
        <p>{securityTwo}</p>
        <button>Change</button>
      </section>
      <section id="email-container">
        <p>Town where you grew up?</p>
        <label>Answer</label>
        <p>{securityThree}</p>
        <button>Change</button>
      </section>
    </section>
  )
}
