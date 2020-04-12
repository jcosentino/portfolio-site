import React from 'react';
import './HomeLanding.scss';
import { ImagePanel } from '../Shared/ImagePanel/ImagePanel';
import { FULL_NAME } from 'constants/constants';
import { IShared } from 'custom_types/MultiComponent/shared_types';

const PHOTOS: IShared.ImgIconData[] = [
  {
    "imageSrc": "self/me.jpg",
    "caption": "Me at a party circa 2017"
  },
  {
    "imageSrc": "self/1n.jpg",
    "caption": "In front of my departmental building after graduation"
  },
  {
    "imageSrc": "self/honors_convocation.jpg",
    "caption": "Honors Convocation 2017"
  },
  {
    "imageSrc": "self/honors_convocation_group.jpg",
    "caption": "Honors Convocation 2017 computer science group"
  },
  {
    "imageSrc": "self/hackathon_team.jpg",
    "caption": "My team at CUNY Hackathon"
  },
  {
    "imageSrc": "self/hackathon_crowd.jpg",
    "caption": "The CUNY Hackathon crowd during the presentations"
  },
  {
    "imageSrc": "self/hackathon_prizes.jpg",
    "caption": "The prizes at the hackathon"
  }
];

const photoList: string[] = PHOTOS.map(photo => photo.imageSrc);
const captionTags: (string | undefined)[] = PHOTOS.map(photo => photo.caption);

export function HomeLanding(): JSX.Element {
  return (
    <>
      <div className='home-img-section'>
      <h1>{FULL_NAME}</h1>
        <div className='post-h1-break'></div>
        <ImagePanel photoList={photoList} captionTags={captionTags} />
      </div>
      <span className='separator-dot'>&#183;</span>
    </>
  );
}
