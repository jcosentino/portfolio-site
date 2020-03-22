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
    const experience = [
      <li>
        <span role='img' aria-label='right pointer'>👉</span>
        {EXPERIENCE_ROLES[0]}
      </li>
    ];
    for(const exp of EXPERIENCE_ROLES.slice(1)){
      experience.push(<li>{exp}</li>);
    }
    return experience;
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
