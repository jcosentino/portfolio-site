import React from 'react';
import './Events.scss';

export const Events = () => {
  return (
    <>
      <span className='anchor' id='Events'></span>
      <div className='home-item'>
        <h1>
        Events
        </h1>
        <div className='events-items'>
          <ul>
          <li>Google Sandbox Machine Learning Lab
            <span role='img' aria-label='right pointer'>👈</span>
          </li>
          <li>Electronic Frontier Foundation Meetup</li>
          <li>CUNY Hackathon</li>
          <li>Tokyo .NET Developers Meetup</li>
          <li>Serverless in the P2P Web</li>
          <li>Google Project Tango Hackathon</li>
          </ul>
        </div>
      </div>
    </>
  );
}
