import React from 'react';
import './HomeLanding.scss';
import { FULL_NAME, PHOTOS } from 'constants/constants';
import { ImagePanel } from '../Shared';

const photoList: string[] = PHOTOS.map((photo) => photo.imageSrc);
const captionTags: (string | undefined)[] = PHOTOS.map((photo) => photo.caption);

function HomeLanding(): JSX.Element {
  return (
    <>
      <div className="home-img-section">
        <h1>{FULL_NAME}</h1>
        <div className="post-h1-break" />
        <ImagePanel photoList={photoList} captionTags={captionTags} />
      </div>
      <span className="separator-dot">&#183;</span>
    </>
  );
}

export default HomeLanding;
