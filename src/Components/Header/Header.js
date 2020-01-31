import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header = ({
  toggleShowLogin, user, handleLogout, toggleShowCreateAccount,
}) => (
  <header>
    <h1 id="main-header">Hero Page</h1>
    <section id="account-container">
      { !user && <button className="account-btn" onClick={toggleShowLogin}>Login</button>}
      { !user && <button className="account-btn" onClick={toggleShowCreateAccount}>Create Account</button>}
      { user && <Link className="account-btn" to="/profile">View Profile</Link> }
      { user && <button className="account-btn" onClick={handleLogout}>Logout</button> }
    </section>
  </header>
);
