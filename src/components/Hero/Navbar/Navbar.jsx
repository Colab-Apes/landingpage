import React from 'react';

import logo from '../../../assets/logo.svg';
import './Navbar.css';

const NavbarComp = () => {
  return (
    <nav>
      
      <div className='brand'>
        <img src={logo} alt="Colab Apes Logo" className="logo"/>
      </div>

      <div className='btn'>
        <button className='signIn'>Sign in</button>
        <button className='signUp'>Sign up</button>
      </div>

    </nav>
  )
}

export default NavbarComp