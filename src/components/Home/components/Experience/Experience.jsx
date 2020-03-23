import React from 'react';
import './Experience.scss';

const EXPERIENCE_ROLES = [
  'Prudential Financial',
  'Goodwill Industries NY / NJ',
  'Bloomberg LP',
  'College of Staten Island OTS',
  'RFCUNY'
];

export function Experience() {
  function generateExperienceRoles(){
    return EXPERIENCE_ROLES.map(role => 
      <li key={role}>{role}</li>
    );
  }

  return (
    <>
      <span className='anchor' id='Experience'></span>
      <div className='home-item'>
        <h1>Experience</h1>
        <div className='experience-items'>
          <ul>
            {generateExperienceRoles()}
          </ul>
        </div>
      </div>
    </>
  );
}
