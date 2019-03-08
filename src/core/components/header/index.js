import React from 'react'
import { Link } from 'react-router-dom';
import GoogleAuth from '../google-auth';
import './header.css'

const Header = () => (
  <div className="header">
    <Link to="/">
      Label
    </Link>
    <Link to="/login">Login</Link>
    <GoogleAuth />
  </div>
);

export default Header

