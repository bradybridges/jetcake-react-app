import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header = ({
  toggleShowLogin, user, handleLogout, toggleShowCreateAccount,
}) => (
  <header>
    <h1 id="main-header">Hero Page</h1>
    <nav>
      <ul id="nav-ul">
        <li className="nav-link"><span className="link" onClick={toggleShowLogin}>Login</span></li>
        <li className="nav-link"><span className="link" onClick={toggleShowCreateAccount}>Create Account</span></li>
        <li className="nav-link"><Link className="link" to="/profile">View Profile</Link></li>
        { user && <span className="link" onClick={handleLogout}>Logout</span>}
      </ul>
    </nav>
  </header>
);
