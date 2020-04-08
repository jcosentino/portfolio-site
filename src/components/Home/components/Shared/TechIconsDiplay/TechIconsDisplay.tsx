import React from 'react';
import './TechIconsDisplay.scss';
import { ITechIconsDisplay } from 'custom_types/techiconsdisplay_types';

export function TechIconsDisplay(props: ITechIconsDisplay.TechIconsDisplayProps): JSX.Element {
    const { iconsList } = props;

    function createTechIcon(iconFile: string): React.ReactFragment {
        return (
            <React.Fragment key={iconFile}>
                <img src={`software/${iconFile}`}
                     className='key_tech-icon'
                     alt={iconFile}
                     title={iconFile} />
            </React.Fragment>
        );
    }

    function generateTechIcons(icons: string[]): React.ReactFragment {
        return icons.map((icon: string) => 
            createTechIcon(icon)
        );
    }

    return(
        <div className='key_tech_icons'>
            {generateTechIcons(iconsList)}
        </div>
    );
}
