import React, { useState, ReactFragment } from 'react';
import './HomeMenu.scss';
import { IHomeMenu } from 'custom_types/homemenu_types';

export function HomeMenu(props: IHomeMenu.HomeMenuProps): JSX.Element {
  const [activeItems, setActiveItems] = useState<boolean[]>([]);
  const { 
    anchorId,
    headerTitle,
    renderItems,
    customDiv
  } = props;

  function openItem(index: number): void {
    const openItems: boolean[] = activeItems.slice(0);
    openItems[index] = true;
    setActiveItems(openItems);
  }

  function closeItem(index: number): void {
    const openItems: boolean[] = activeItems.slice(0);
    openItems[index] = false;
    setActiveItems(openItems);
  }

  function handleClick(index: number): void {
    if(activeItems[index]){
      closeItem(index);
    } else {
      openItem(index);
    }
  }

  function findActiveTabs(index: number): string {
    return activeItems[index] ? 'info-item-banner-opened' : '';
  }

  function createEvent(title: string, index: number): JSX.Element {
    return (
      <li key={index}>
        <button type='button' className={`info-item-banner ${findActiveTabs(index)}`}
                onClick={() => handleClick(index)} >
          {title}
        </button>
        {activeItems[index] && 
         <div className='info-item-para'>
            {customDiv[index]}
        </div>}
      </li>
    );
  }

  function generateEvents(): ReactFragment {
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
