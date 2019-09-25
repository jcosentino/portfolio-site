import React from 'react';
import './Home.scss';
import { 
  Education,
  Experience,
  Hobbies,
  Projects,
  Technologies } from './components';

export class Home extends React.Component {
  render(){
    return (
      <div className="Home">
        <h1>John Cosentino</h1>
        <img src='me.jpg' alt='John C' />
        <p>^ circa 2017</p>
        <div className='home-menu-items'>
          <Experience />
          <Education />
          <Projects />
          <Technologies />
          <Hobbies />
        </div>
      </div>
    );
  }
}
