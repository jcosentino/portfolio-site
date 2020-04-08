import React from 'react';
import './Software.scss';
import { IShared } from 'custom_types/Shared/shared_types';

const SOFTWARE: IShared.ImgIconData[] = [
  {
    "url": "https://angular.io/",
    "imageSrc": "software/angular.png",
    "alt": "Angular"
  },
  {
    "url": "https://aws.amazon.com/",
    "imageSrc": "software/aws.jpg",
    "alt": "Amazon Web Services"
  },
  {
    "url": "https://palletsprojects.com/p/flask/",
    "imageSrc": "software/python.png",
    "alt": "Flask"
  },
  {
    "url": "https://nodejs.org/",
    "imageSrc": "software/nodejs.png",
    "alt": "Node JS"
  },
  {
    "url": "https://reactjs.org/",
    "imageSrc": "software/reactjs.jpg",
    "alt": "React JS"
  },
  {
    "url": "https://redux.js.org/",
    "imageSrc": "software/redux.png",
    "alt": "Redux"
  },
  {
    "url": "https://rubyonrails.org/",
    "imageSrc": "software/rails.png",
    "alt": "Ruby On Rails"
  },
  {
    "url": "https://spring.io/",
    "imageSrc": "software/spring.png",
    "alt": "Spring"
  },
  {
    "url": "https://www.w3schools.com/sql/sql_intro.asp",
    "imageSrc": "software/sql.png",
    "alt": "SQL"
  },
  {
    "url": "https://www.typescriptlang.org/",
    "imageSrc": "software/typescript.jpg",
    "alt": "TypeScript"
  }
];

function createSoftwareComp(url: string, imageSrc: string, alt: string): JSX.Element {
  return (
    <li key={alt}>
      <a href={url}
        target='blank' rel='noopener noreferrer'>
          <img src={imageSrc} alt={alt} title={alt} />
      </a>
    </li>
  );
}

function generateSoftwareItems(): JSX.Element[] {
  return SOFTWARE.map((soft: IShared.ImgIconData) => 
    createSoftwareComp(soft.url, soft.imageSrc, soft.alt)
  );
}

export function Software(): JSX.Element {
  return (
    <>
      <span className='anchor' id='Software'></span>
      <div className='home-item'>
        <h1>
        Software
        </h1>
        <div className='software-items'>
          <ul>
            {generateSoftwareItems()}
          </ul>
        </div>
      </div>
    </>
  );
}
