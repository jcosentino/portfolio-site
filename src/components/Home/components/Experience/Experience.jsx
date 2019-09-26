import React from 'react';
import './Experience.scss';

export class Experience extends React.Component {
  render(){
    return (
      <div id='Experience' className='home-item'>
        <h1>Experience</h1>
        <div className='experience-items'>
          <ul>
            <li>👉Prudential Financial</li>
            <li>Goodwill Industries NY / NJ</li>
            <li>Bloomberg LP</li>
            <li>CUNY - College of Staten Island OTS</li>
            <li>RFCUNY</li>
          </ul>
        </div>
      </div>
    );
  }
}
