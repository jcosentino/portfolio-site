import React from 'react';
import './Technologies.scss';

export class Technologies extends React.Component {
  render(){
    return (
      <div id='Technologies' className='home-item'>
        <h1>
          <span role='img' aria-label="right pointer">👉</span>
            Technologies
        </h1>
        <div className='technologies-items'>
          <ul>
            <li>Angular</li>
            <li>AWS</li>
            <li>Express JS</li>
            <li>Flask</li>
            <li>Node JS</li>
            <li>React JS</li>
            <li>Ruby On Rails</li>
            <li>Spring</li>
          </ul>
        </div>
      </div>
    );
  }
}
