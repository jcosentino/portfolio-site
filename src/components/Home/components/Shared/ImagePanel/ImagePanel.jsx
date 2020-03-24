import React from 'react';
import './ImagePanel.scss';
import { Fade } from 'react-slideshow-image';

export function ImagePanel(props){
    const { photoList, captionTags } = props;

    const fadeProperties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: false,
        indicators: true,
    }

    function createPhoto(photo, caption){
        return (
            <div className='each-fade'>
                <div className='image-container'>
                    <img src={photo} alt={photo} title={caption} />
                </div>
                <h2>{caption}</h2>
            </div>
        );
    }

    function generatePhotoSlideShow(fadeProperties){
        return (
            <Fade {...fadeProperties}>
                {photoList.map((photo, index) => 
                    createPhoto(photo, captionTags[index])
                )}
            </Fade>
        );
    }

    return (
        <div className='img-slideshow-container'>
            {generatePhotoSlideShow(fadeProperties)}
        </div>
    );
}
