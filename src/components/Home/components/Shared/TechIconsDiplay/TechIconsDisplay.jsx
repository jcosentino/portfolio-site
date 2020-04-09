import React, { Fragment } from 'react';
import './TechIconsDisplay.scss';

export function TechIconsDisplay(props){
    const { iconsList } = props;

    function createTechIcon(iconFile){
        return (
            <Fragment key={iconFile}>
                <img src={`software/${iconFile}`}
                     className='key_tech-icon'
                     alt={iconFile}
                     title={iconFile} />
            </Fragment>
        );
    }

    function generateTechIcons(icons){
        return icons.map(icon => 
            createTechIcon(icon)
        );
    }

    return(
        <div className='key_tech_icons'>
            {generateTechIcons(iconsList)}
        </div>
    );
}
