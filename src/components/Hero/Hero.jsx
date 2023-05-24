import React from 'react';
import NavbarComp from './Navbar/Navbar';
import Waitlist from './Waitlist/Waitlist';

import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
        <NavbarComp />
        <div className='hero-phrase'>
            <h1>Unlock Your Digital Team:<br/>Find, Collaborate, and Build the Future<br/>Together</h1>
        </div>
        <Waitlist />
    </div>
  )
}

export default Hero