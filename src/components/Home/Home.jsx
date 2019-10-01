import React from 'react';
import './Home.scss';
import { 
  Education,
  Experience,
  About,
  Projects,
  Technology, 
  HomeLanding } from './components';

export class Home extends React.Component {
  render(){
    return (
      <div className="Home">
        <HomeLanding />
        <div className='home-menu-items'>
          <Experience />
          <Education />
          <Projects />
          <Technology />
          <About />
        </div>
      </div>
    );
  }
}
