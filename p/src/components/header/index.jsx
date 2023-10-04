import React from 'react';
import Logo from '../../assets/img/argentBankLogo.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
        <nav className="main-nav">
            <NavLink to= '/' className="main-nav-logo" >
        <img
          className="main-nav-logo-image"
          src= {Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
      <div>
        <NavLink to = 'sign-in' className="main-nav-item" >
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
    </header>
  )
}

export default Header