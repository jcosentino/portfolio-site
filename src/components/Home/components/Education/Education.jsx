import React from 'react';
import './Education.scss';

export const Education = () => {
  return (
    <>
      <span className='anchor' id='Education'></span>
      <div className='home-item'>
        <h1>Education</h1>
        <div className='education-items'>
          <h4>The College of Staten Island - CUNY</h4>
          <ul>
            <li>
              <span role='img' aria-label='right pointer'>👉</span>
              Computer Science BS
            </li>
            <li>Mathematics Minor</li>
            <li>Psychology BS</li>
          </ul>
        </div>
      </div>
    </>
  );
}
