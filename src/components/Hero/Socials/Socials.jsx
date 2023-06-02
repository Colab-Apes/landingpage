import React from 'react';

import youtube from '../../../assets/socials/youtube.svg';
import facebook from '../../../assets/socials/facebook.svg';
import instagram from '../../../assets/socials/instagram.svg';
import twitter from '../../../assets/socials/twitter.svg';
import linkedin from '../../../assets/socials/linkedin.svg';

import './Socials.css';

const Socials = () => {
  return (
    <div className='socials'>

      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="linkedin" className="icon"/>
      </a>

      <a href="https://www.twitter.com/co_labapes" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="twitter" className="icon"/>
      </a>

      <a href="https://www.instagram.com/colabapes" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="instagram" className="icon"/>
      </a>

      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="facebook" className="icon"/>
      </a>

      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <img src={youtube} alt="youtube" className="icon"/>
      </a>
    </div>
  )
}

export default Socials