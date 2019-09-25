import React from 'react';
import './Footer.scss';

export class Footer extends React.Component {
  render(){
    return (
      <div className='Footer'>
        <div className='footer-content'>
        <a href='https://twitter.com/jcosentino91'
           target='blank' rel='noopener noreferrer'>
          <img src='twitter.png' alt='Twitter' />
        </a>

        <a href = 'mailto:john.s.cosentino@gmail.com?subject'
           target='_blank' rel='noopener noreferrer'>
          <img src='/email.png' alt='Email' />
        </a>

        <a href='https://www.linkedin.com/in/john-cosentino/'
           target='blank' rel='noopener noreferrer'>
          <img src='linkedin.png' alt='LinkedIn' />
        </a>

        <a href='https://github.com/jcosentino'
           target='blank' rel='noopener noreferrer'>
          <img src='github.png' alt='Github' />
        </a>
        </div>
      </div>
    );
  }
}
