import React from 'react';
import './Software.scss';

const HIGHLIGHTED = 'React JS';

const SOFTWARE = [
  'Angular',
  'AWS',
  'Express JS',
  'Flask',
  'Node JS',
  'React JS',
  'Ruby On Rails',
  'Spring'
];

export function Software() {
  function generateSoftwareItems(){
    const software_items = [];
    for(const soft of SOFTWARE){
      if(soft === HIGHLIGHTED){
        software_items.push(
          <li>{soft}<span role='img' aria-label='right pointer'>👈</span></li>
        );
      } else {
        software_items.push(<li>{soft}</li>);
      }
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
