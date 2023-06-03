import React from 'react';
import NavbarComp from './Navbar/Navbar';
import Waitlist from './Waitlist/Waitlist';

import './Hero.css';
import Socials from './Socials/Socials';

const Hero = () => {
  return (
    <div className='hero'>
        <NavbarComp />
        <Waitlist />
        <Socials />
    </div>
  )
}

export default Hero