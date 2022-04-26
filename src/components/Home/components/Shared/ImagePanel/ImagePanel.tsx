import React, { Fragment, ReactFragment, useState } from 'react';
import './ImagePanel.scss';
import { Fade } from 'react-slideshow-image';
import { IImagePanel } from 'custom_types/imagepanel_types';

function ImagePanel(props: IImagePanel.ImagePanelProps): JSX.Element {
  const { photoList, captionTags } = props;
  const [enlarged, setEnlarged] = useState<boolean>(false);

  const fadeProperties: IImagePanel.ImagePanelProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    pauseOnHover: true,
  };

  const {
    duration,
    transitionDuration,
    infinite,
    indicators,
    pauseOnHover,
  } = fadeProperties;

  function enlargeDivClass(): string {
    return enlarged ? 'img-enlarge' : '';
  }

  function setEnlargedCallback() {
    return () => setEnlarged(!enlarged);
  }

  function createPhoto(photo: string, caption: (string | undefined)): ReactFragment {
    return (
      <Fragment key={photo}>
        <div className="each-fade">
          <div
            className={`image-panel-container ${enlargeDivClass()}`}
            onClick={setEnlargedCallback()}
            onKeyDown={setEnlargedCallback()}
            role="button"
            tabIndex={0}
          >
            <img
              src={photo}
              alt={photo}
              title={caption}
            />
          </div>
          <h2>{caption}</h2>
        </div>
      </Fragment>
    );
  }

  function generatePhotoSlideShow(): JSX.Element {
    return (
      <Fade
        duration={duration}
        transitionDuration={transitionDuration}
        infinite={infinite}
        indicators={indicators}
        pauseOnHover={pauseOnHover}
      >
        {photoList.map((photo, index) => createPhoto(photo, captionTags[index]))}
      </Fade>
    );
  }

  return (
    <div className="img-slideshow-container">
      {generatePhotoSlideShow()}
    </div>
  );
}

export default ImagePanel;
