import React from 'react';
import './Software.scss';

export const Software = () => {
  return (
    <>
      <span className='anchor' id='Software'></span>
      <div className='home-item'>
        <h1>
        Software
        </h1>
        <div className='software-items'>
          <ul>
            <li>Angular</li>
            <li>AWS</li>
            <li>Express JS</li>
            <li>Flask</li>
            <li>Node JS</li>
            <li>React JS<span role='img' aria-label='right pointer'>👈</span></li>
            <li>Ruby On Rails</li>
            <li>Spring</li>
          </ul>
        </div>
      </div>
    </>
  );
}
