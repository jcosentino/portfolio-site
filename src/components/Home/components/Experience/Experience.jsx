import React from 'react';
import './Experience.scss';

export class Experience extends React.Component {
  render(){
    return (
      <div id='Experience' className='home-item'>
        <h1>Experience</h1>
        <div className='experience-items'>
          <h4>Prudential</h4>
          <h4>Goodwill Industries NY / NJ</h4>
          <h4>Bloomberg LP</h4>
          <h4>CUNY - College of Staten Island OTS</h4>
          <h4>RFCUNY</h4>
        </div>
      </div>
    );
  }
}
