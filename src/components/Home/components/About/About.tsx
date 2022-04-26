import { ABOUT_TEXT } from 'constants/constants';
import React from 'react';
import './About.scss';

function About(): JSX.Element {
  return (
    <>
      <span className="anchor" id="About" />
      <div className="home-item">
        <h1>
          About
          <span role="img" aria-label="waving hand">👋</span>
        </h1>
        <div className="about-item">
          <p>Born and raised in Staten Island, NY.</p>
          <span role="img" aria-label="pointing down">👇</span>
          <p>Currently based in New York, NY.</p>
          <span role="img" aria-label="looking eyes">👀</span>
          <p>
            {ABOUT_TEXT}
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
