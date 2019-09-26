import React from 'react';
import './About.scss';

export class About extends React.Component {
  render(){
    return (
      <div id='About' className='home-item'>
        <h1>About<span role='img' aria-label="waving hand">👋</span></h1>
        <div className='about-item'>
          <p>I am from Staten Island, NY, USA.</p>
          <span className='separator-dot-about'>&#183;</span>
          <p>In my free time I study data structures, play on my Switch, excercise, and practice guitar.</p>
          <span className='separator-dot-about'>&#183;</span>
          <p>My short-term goals include moving out on my own and landing a full-time position.</p>
          <span className='separator-dot-about'>&#183;</span>
          <p>My long-term goal is to make a major, widespread, and beneficial impact on this world.</p>
          <span className='separator-dot-about'>&#183;</span>
          <p>I want to be admired like Steve Jobs, impactful like Linus Torvalds, and honored like FDR.</p>
        </div>
      </div>
    );
  }
}
