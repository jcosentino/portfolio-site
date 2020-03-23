import React, { useState } from 'react';
import { CLICK_IMAGE } from 'constants/constants';
import './HomeLanding.scss';

const PHOTOS = [
  {
    "src": "me.jpg",
    "caption": "Me at a party circa 2017"
  },
  {
    "src": "1n.jpg",
    "caption": "In front of my departmental building after graduation"
  },
  {
    "src": "honors_convocation.jpg",
    "caption": "Honors Convocation 2017"
  },
  {
    "src": "honors_convocation_group.jpg",
    "caption": "Honors Convocation 2017 computer science group"
  },
  {
    "src": "hackathon_team.jpg",
    "caption": "My team at CUNY Hackathon"
  },
  {
    "src": "hackathon_crowd.jpg",
    "caption": "The CUNY Hackathon crowd during the presentations"
  },
  {
    "src": "hackathon_prizes.jpg",
    "caption": "The prizes at the hackathon"
  }
];

export function HomeLanding() {
  const [activePhoto, setActivePhoto] = useState(0);

  function isActivePhoto(index){
    return index === activePhoto ? '' : 'inactive-landing-img';
  }

  function setNewActivePhoto(newIndex){
    if(newIndex >= PHOTOS.length){
      setActivePhoto(0);
    } else {
      setActivePhoto(newIndex);
    }
  }

  function createPhotoObj(src, caption, index){
    return (
      <div className={isActivePhoto(index)} key={index}>
        <figure>
          <img src={`self/${src}`} alt={src} title={CLICK_IMAGE}
               onClick={() => setNewActivePhoto(index+1)} />
          <figcaption>{caption}</figcaption>
        </figure>
      </div>
    );
  }

  function generatePhotos(){
    return PHOTOS.map((photo, index) => 
      createPhotoObj(photo.src, photo.caption, index)
    );
  }

  return (
    <>
      <div className='home-img-section'>
        <h1>John Cosentino</h1>
        <div className='post-h1-break'></div>
          {generatePhotos()}
      </div>
    <span className='separator-dot'>&#183;</span>
  </>
  );
}
