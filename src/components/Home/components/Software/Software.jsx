import React from 'react';
import './Software.scss';

const SOFTWARE = [
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
    "url": "https://www.typescriptlang.org/",
    "imageSrc": "software/typescript.jpg",
    "alt": "TypeScript"
  }
];

export function Software() {
  function createSoftwareComp(url, imageSrc, alt){
    return (
      <li>
        <a href={url}
          target='blank' rel='noopener noreferrer'>
            <img src={imageSrc} alt={alt} title={alt} />
        </a>
      </li>
    );
  }

  function generateSoftwareItems(){
    const software_items = [];
    for(const soft of SOFTWARE){
      software_items.push(
        createSoftwareComp(soft.url, soft.imageSrc, soft.alt)
      );
    }
    return software_items;
  }

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
