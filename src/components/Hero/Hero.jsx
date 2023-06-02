import React from 'react';
import NavbarComp from './Navbar/Navbar';
import Waitlist from './Waitlist/Waitlist';
import Socials from './Socials/Socials';

import './Hero.css';
import './HeroMobile.css';

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