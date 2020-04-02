import React from 'react';
import './Footer.scss';
import { TWITTER_LINK,
         EMAIL_LINK,
         LINKEDIN_LINK,
         GITHUB_LINK,
         RESUME_LINK,
         TWITTER,
         EMAIL_TEXT,
         LINKEDIN,
         GITHUB,
         RESUME_TEXT } from 'constants/constants';

const FOOTER_DATA = [
  {
    "url": TWITTER_LINK,
    "imageSrc": "twitter.png",
    "alt": TWITTER
  },
  {
    "url": `mailto:${EMAIL_LINK}?subject`,
    "imageSrc": "email.png",
    "alt": EMAIL_TEXT
  },
  {
    "url": LINKEDIN_LINK,
    "imageSrc": "linkedin.png",
    "alt": LINKEDIN
  },
  {
    "url": GITHUB_LINK,
    "imageSrc": "github.png",
    "alt": GITHUB
  },
  {
    "url": RESUME_LINK,
    "imageSrc": "download.png",
    "alt": RESUME_TEXT
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
    <>
      <div className='Footer'>
        <div className='footer-content'>
          {generateFooterComps()}
        </div>
      </div>
      <div id='Bottom'></div>
    </>
  );
}

export default Footer;
