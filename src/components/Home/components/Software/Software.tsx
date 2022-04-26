import React from 'react';
import './Software.scss';
import { IShared } from 'custom_types/MultiComponent/shared_types';
import { SOFTWARE_ITEMS } from 'constants/constants';

function createSoftwareComp(softComp: IShared.ImgIconData): JSX.Element {
  const {
    alt,
    imageSrc,
    url,
  } = softComp;
  return (
    <li key={alt}>
      <a
        href={url}
        target="blank"
        rel="noopener noreferrer"
      >
        <img src={imageSrc} alt={alt} title={alt} />
      </a>
    </li>
  );
}

function generateSoftwareItems(): JSX.Element[] {
  return SOFTWARE_ITEMS.map((soft: IShared.ImgIconData) => createSoftwareComp(soft));
}

function Software(): JSX.Element {
  return (
    <>
      <span className="anchor" id="Software" />
      <div className="home-item">
        <h1>
          Software
        </h1>
        <div className="software-items">
          <ul>
            {generateSoftwareItems()}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Software;
