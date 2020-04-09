import React from 'react';
import './ImagePanel.scss';
// import { Fade } from 'react-slideshow-image';
import { IImagePanel } from 'custom_types/imagepanel_types';

export function ImagePanel(props: IImagePanel.ImagePanelProps): JSX.Element {
    const { photoList, captionTags } = props;

    const fadeProperties: IImagePanel.ImagePanelProperties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        pauseOnHover: true
    }

    function createPhoto(photo: string, caption: (string | undefined)): React.ReactFragment {
        return (
            <React.Fragment key={photo}>
                <div className='each-fade'>
                    <div className='image-panel-container'>
                        <img src={photo} alt={photo} title={caption} />
                    </div>
                    <h2>{caption}</h2>
                </div>
            </React.Fragment>
        );
    }

    function generatePhotoSlideShow(fadeProperties: IImagePanel.ImagePanelProperties): any { // change type
        return (
            <></>
            // <Fade {...fadeProperties}>
            //     {photoList.map((photo, index) => 
            //         createPhoto(photo, captionTags[index])
            //     )}
            // </Fade>
        );
    }

    return (
        <div className='img-slideshow-container'>
            {generatePhotoSlideShow(fadeProperties)}
        </div>
    );
}
