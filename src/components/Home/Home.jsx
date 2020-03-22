import React from 'react';
import './Home.scss';
import {
  HomeLanding,
  Experience,
  Education,
  Projects,
  Software,
  Events,
  About,
   } from './components';

export function Home() {
  return (
    <div className='Home'>
      <HomeLanding />
      <div className='home-menu-items'>
        <Experience />
        <Education />
        <Projects />
        <Software />
        <Events />
        <About />
      </div>
    </div>
  );
}
