import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = ({
  toggleShowLogin, user, handleLogout, toggleShowCreateAccount, showNav,
}) => (
  <header>
    <Link id="main-header" to="/">Hero Page</Link>
    <section id="account-container">
      { (showNav && !user) && <button className="account-btn" onClick={() => toggleShowLogin(true)}>Login</button>}
      { (showNav && !user) && <button className="account-btn" onClick={() => toggleShowCreateAccount(true)}>Create Account</button>}
      { (showNav && user) && <Link className="account-btn" to="/profile">View Profile</Link> }
      { (showNav && user) && <button className="account-btn" onClick={handleLogout}>Logout</button> }
    </section>
  </header>
);

export default Header;
