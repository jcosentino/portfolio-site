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
        <Experience />
        <Education />
        <Hobbies />
        <Projects />
        <Technologies />
      </div>
    );
  }
}
