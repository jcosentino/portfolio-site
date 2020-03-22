import React from 'react';
import './Footer.scss';
import { EMAIL } from 'constants/constants';

const FOOTER_DATA = [
  {
    "url": "https://twitter.com/jcosentino91",
    "imageSrc": "footer/twitter.png",
    "alt": "Twitter"
  },
  {
    "url": `mailto:${EMAIL}?subject`,
    "imageSrc": "footer/email.png",
    "alt": "Email"
  },
  {
    "url": "https://www.linkedin.com/in/john-cosentino/",
    "imageSrc": "footer/linkedin.png",
    "alt": "LinkedIn"
  },
  {
    "url": "https://github.com/jcosentino",
    "imageSrc": "footer/github.png",
    "alt": "GitHub"
  }
];

export function Footer() {
  function createFooterComp(url, imageSrc, alt){
    return (
      <a href={url}
          target='blank' rel='noopener noreferrer'>
        <img src={imageSrc} alt={alt} />
      </a>
    );
  }

  function generateFooterComps(){
    const footerComps = [];
    for(const data of FOOTER_DATA){
      footerComps.push(createFooterComp(data.url, data.imageSrc, data.alt));
    }
    return footerComps;
  }

  return (
    <div className='Footer'>
      <div className='footer-content'>
        {generateFooterComps()}
      </div>
    </div>
  );
}

export default Footer;
