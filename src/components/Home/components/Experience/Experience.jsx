import React from 'react';
import './Experience.scss';

export const Experience = () => {
  return (
    <>
      <span className='anchor' id='Experience'></span>
      <div className='home-item'>
        <h1>Experience</h1>
        <div className='experience-items'>
          <ul>
            <li>
              <span role='img' aria-label="right pointer">👉</span>
              Prudential Financial
            </li>
            <li>Goodwill Industries NY / NJ</li>
            <li>Bloomberg LP</li>
            <li>College of Staten Island OTS</li>
            <li>RFCUNY</li>
          </ul>
        </div>
      </div>
    </>
  );
}
