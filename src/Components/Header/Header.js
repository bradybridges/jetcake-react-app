import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <h1 id="main-header">Hero Page</h1>
      <nav>
        <ul id="nav-ul">
          <li className="nav-link"><Link className="link" to="/login">Login</Link></li>
          <li className="nav-link"><Link className="link" to="/create">Create Account</Link></li>
          <li className="nav-link"><Link className="link" to="/profile">View Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
}