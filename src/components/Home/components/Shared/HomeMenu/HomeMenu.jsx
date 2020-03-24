import React, { useState } from 'react';
import './HomeMenu.scss';

export function HomeMenu(props) {
  const [activeItems, setActiveItems] = useState([]);
  const { 
    anchorId,
    headerTitle,
    renderItems,
    customDiv
  } = props;

  function openItem(index){
    const openItems = activeItems.slice(0);
    openItems[index] = true;
    setActiveItems(openItems);
  }

  function closeItem(index){
    const openItems = activeItems.slice(0);
    openItems[index] = false;
    setActiveItems(openItems);
  }

  function handleClick(index){
    if(activeItems[index]){
      closeItem(index);
    } else {
      openItem(index);
    }
  }

  function findActiveTabs(index, type='subitem'){
    return type === 'subitem' ? activeItems[index] ? '' : 'info-item-para-inactive'
                           : activeItems[index] ? 'info-item-banner-opened' : '';
  }

  function createEvent(title, index){
    return (
      <li key={index}>
        <button type='button' className={'info-item-banner ' + findActiveTabs(index, 'button')}
                onClick={() => handleClick(index)} >
          {title}
        </button>
        <div className={'info-item-para ' + findActiveTabs(index)} >
            {customDiv[index]}
        </div>
      </li>
    );
  }

  function generateEvents(){
    return renderItems.map((item, index) => 
      createEvent(item, index)
    );
  }

  return (
    <>
      <span className='anchor' id={anchorId}></span>
      <div className='home-item'>
        <h1>
        {headerTitle}
        </h1>
        <div className='list-items'>
          <ul>
            {generateEvents()}
          </ul>
        </div>
      </div>
    </>
  );
}
