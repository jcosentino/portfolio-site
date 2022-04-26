import React from 'react';
import './Footer.scss';
import { FOOTER_DATA } from 'constants/constants';
import { IShared } from 'custom_types/MultiComponent/shared_types';

function Footer(): JSX.Element {
  function createFooterComp(imageSrc: string, url: string = '', alt: string = '') {
    return (
      <a
        href={url}
        target="blank"
        rel="noopener noreferrer"
        key={alt}
      >
        <img src={imageSrc} alt={alt} title={alt} />
      </a>
    );
  }

  function generateFooterComps(): JSX.Element[] {
    return FOOTER_DATA.map((data: IShared.ImgIconData) => createFooterComp(`footer/${data.imageSrc}`, data.url, data.alt));
  }

  return (
    <>
      <div className="Footer">
        <div className="footer-content">
          {generateFooterComps()}
        </div>
      </div>
      <div id="Bottom" />
    </>
  );
}

export default Footer;
