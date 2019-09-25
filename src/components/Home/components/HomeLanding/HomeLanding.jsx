import React from 'react';
import './HomeLanding.scss';

export class HomeLanding extends React.Component {
  render(){
    return (
      <>
        <div className='home-img-section'>
          <h1>John Cosentino</h1>
          <div className='post-h1-break'></div>
          <img src='me.jpg' alt='John C' />
          <p>^ circa 2017</p>
      </div>
      <span className='separator-dot'>&#183;</span>
    </>
    );
  }
}
