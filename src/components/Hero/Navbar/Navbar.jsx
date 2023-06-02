import React from 'react';

import logo from '../../../assets/logo.svg';
import mobileIcon from '../../../assets/mobileIcon.svg';

import './Navbar.css';
import './NavbarMobile.css';

const NavbarComp = () => {
  return (
    <nav>

      <img src={logo} alt="Colab Apes Logo" className="logo"/>

      <div className='btn'>
        <button className='signIn navBtn'>Sign in</button>
        <button className='signUp navBtn'>Sign up</button>
      </div>

      <div className="mobileBtn">
        <img src={mobileIcon} alt="Colab Apes Logo" className="mobileIcon"/>
      </div>

    </nav>
  )
}

export default NavbarComp