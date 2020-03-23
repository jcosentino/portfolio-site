import React from 'react';
import './Footer.scss';
import { EMAIL } from 'constants/constants';

const FOOTER_DATA = [
  {
    "url": "https://twitter.com/jcosentino91",
    "imageSrc": "twitter.png",
    "alt": "Twitter"
  },
  {
    "url": `mailto:${EMAIL}?subject`,
    "imageSrc": "email.png",
    "alt": "Email"
  },
  {
    "url": "https://www.linkedin.com/in/john-cosentino/",
    "imageSrc": "linkedin.png",
    "alt": "LinkedIn"
  },
  {
    "url": "https://github.com/jcosentino",
    "imageSrc": "github.png",
    "alt": "GitHub"
  }
];

export function Footer() {
  function createFooterComp(url, imageSrc, alt){
    return (
      <a href={url}
         target='blank' rel='noopener noreferrer'
         key={alt}>
        <img src={imageSrc} alt={alt} />
      </a>
    );
  }

  function generateFooterComps(){
    return FOOTER_DATA.map(data => 
      createFooterComp(data.url, `footer/${data.imageSrc}`, data.alt)
    );
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
