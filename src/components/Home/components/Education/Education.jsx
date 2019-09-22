import React from 'react';
import './Education.scss';

export class Education extends React.Component {
  render(){
    return (
      <div id='Education' className='home-item'>
        <h1>Education</h1>
        <div className='education-items'>
          <h2>The College of Staten Island - CUNY</h2>
          <h4>Computer Science BS</h4>
          <h4>Mathematics minor</h4>
          <h4>Psychology BS</h4>
        </div>
      </div>
    );
  }
}
