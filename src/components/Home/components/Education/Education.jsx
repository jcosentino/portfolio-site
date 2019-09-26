import React from 'react';
import './Education.scss';

export class Education extends React.Component {
  render(){
    return (
      <div id='Education' className='home-item'>
        <h1>Education</h1>
        <div className='education-items'>
          <h4>The College of Staten Island - CUNY</h4>
          <ul>
            <li>👉Computer Science BS</li>
            <li>Mathematics Minor</li>
            <li>Psychology BS</li>
          </ul>
        </div>
      </div>
    );
  }
}
