import React from 'react';

import waitlistImg from '../../../assets/waitlist.svg';
import line from '../../../assets/line.svg';

import './Waitlist.css';
import './WaitlistMobile.css';

const Waitlist = () => {
  return (
    <div className='waitlist'>

      <div className='text'>

        <div className='top'>
          <p>Coming soon</p> 
          <img src={line} alt="Line" className="line"/>
        </div>

        <h3>Unlock Your Digital Team:<br/>Find, Collaborate, and Build the<br/>Future Together</h3>

        <div className='bottom' id='desktop'>
          <p>Join the wait list</p>
          <form action="">
            <input type="email" placeholder='enter your email address...' required/>
            <button>Join</button>
          </form>
        </div>

      </div>

      <img src={waitlistImg} alt="Team collaboration" className="waitlistSVG"/>

      <div className='bottom' id='mobile'>
        <p>Join the wait list</p>
        <form action="">
          <input type="email" placeholder='enter your email address...' required/>
          <button>Join</button>
        </form>
      </div>
    </div>
  )
}

export default Waitlist