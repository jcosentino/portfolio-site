import React from 'react';
import './Home.scss';
import { 
  Education,
  Experience,
  About,
  Projects,
  Software, 
  HomeLanding } from './components';

  export const Home = () => {
    return (
      <div className="Home">
        <HomeLanding />
        <div className='home-menu-items'>
          <Experience />
          <Education />
          <Projects />
          <Software />
          <About />
        </div>
      </div>
    );
  }

