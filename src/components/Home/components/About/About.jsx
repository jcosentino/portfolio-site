import React from 'react';
import './About.scss';

export class About extends React.Component {
  render(){
    return (
      <>
        <span className='anchor' id='About'></span>
        <div className='home-item'>
          <h1>About<span role='img' aria-label='waving hand'>👋</span></h1>
          <div className='about-item'>
            <p>Born and raised in Staten Island, NY.</p>
            <span role='img' aria-label='pointing down'>☝️</span>
            <p>Currently working in Newark, NJ.</p>
            <span role='img' aria-label='looking eyes'>👀</span>
            <p>I want to be admired like Steve Jobs, impactful like Linus Torvalds, and honored like FDR.</p>
          </div>
        </div>
      </>
    );
  }
}
