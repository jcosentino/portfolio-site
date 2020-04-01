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
  },
  {
    "url": "https://www.dropbox.com/s/2gkajc8ufdh2t57/Resume%20%28March%202020%20e%29.pdf",
    "imageSrc": "download.png",
    "alt": "Resume"
  }
];

export function Footer() {
  function createFooterComp(url, imageSrc, alt){
    return (
      <a href={url}
         target='blank' rel='noopener noreferrer'
         key={alt}>
        <img src={imageSrc} alt={alt} title={alt} />
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
