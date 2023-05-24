import React from 'react';
import './Waitlist.css';

const Waitlist = () => {
  return (
    <div className='waitlist'>
      <p>Join the waitlist</p>
      <form action="">
        <input type="text" placeholder='Enter your email address...'/>
        <button>Join</button>
      </form>
    </div>
  )
}

export default Waitlist