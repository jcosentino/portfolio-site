import React from 'react';
import './Projects.scss';

export class Projects extends React.Component {
  render(){
    return (
      <div id='Projects' className='home-item'>
        <h1>Projects</h1>
        <div className='projects-items'>
          <ul>
            <li>
              <span role='img' aria-label="right pointer">👉</span>
              Doctor Appointment Scheduler AWS
            </li>
            <li>Portfolio Website</li>
            <li>CUNY Tech Prep - NYC Tech Talent Pipeline</li>
            <li>RFCUNY Honors Research</li>
          </ul>
        </div>
      </div>
    );
  }
}
