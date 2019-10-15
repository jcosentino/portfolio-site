import React from 'react';
import './Projects.scss';

export const Projects = () => {
  return (
    <>
      <span className='anchor' id='Projects'></span>
      <div className='home-item'>
        <h1>Projects</h1>
        <div className='projects-items'>
          <ul>
            <li>
              <span role='img' aria-label="right pointer">👉</span>
              Doctor Appointment Scheduler
            </li>
            <li>Goodwill PO Search / Indexer</li>
            <li>Portfolio Website</li>
            <li>CUNY Tech Prep - NYC TTP</li>
            <li>RFCUNY Honors Research</li>
          </ul>
        </div>
      </div>
    </>
  );
}

