import React from 'react';
import './Projects.scss';

const PROJECTS = [
  'Doctor Appointment Scheduler',
  'Goodwill PO Search / Indexer',
  'Portfolio Website',
  'CUNY Tech Prep - NYC TTP',
  'RFCUNY Honors Research'
];

export function Projects() {
  function generateProjects(){
    return PROJECTS.map(proj =>
      <li key={proj}>{proj}</li>
    );
  }

  return (
    <>
      <span className='anchor' id='Projects'></span>
      <div className='home-item'>
        <h1>Projects</h1>
        <div className='projects-items'>
          <ul>
            {generateProjects()}
          </ul>
        </div>
      </div>
    </>
  );
}

