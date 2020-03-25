import React from 'react';
import './HomeLanding.scss';
import { ImagePanel } from '../Shared/ImagePanel/ImagePanel';

const PHOTOS = [
  {
    "src": "self/me.jpg",
    "caption": "Me at a party circa 2017"
  },
  {
    "src": "self/1n.jpg",
    "caption": "In front of my departmental building after graduation"
  },
  {
    "src": "self/honors_convocation.jpg",
    "caption": "Honors Convocation 2017"
  },
  {
    "src": "self/honors_convocation_group.jpg",
    "caption": "Honors Convocation 2017 computer science group"
  },
  {
    "src": "self/hackathon_team.jpg",
    "caption": "My team at CUNY Hackathon"
  },
  {
    "src": "self/hackathon_crowd.jpg",
    "caption": "The CUNY Hackathon crowd during the presentations"
  },
  {
    "src": "self/hackathon_prizes.jpg",
    "caption": "The prizes at the hackathon"
  }
];

export function HomeLanding(){
  const photoList = PHOTOS.map(photo => photo.src);
  const captionTags = PHOTOS.map(photo => photo.caption);

  return (
    <>
      <div className='home-img-section'>
        <h1>John Cosentino</h1>
        <div className='post-h1-break'></div>
        <ImagePanel photoList={photoList} captionTags={captionTags} />
      </div>
      <span className='separator-dot'>&#183;</span>
    </>
  );
}
