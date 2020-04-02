import React, { useState } from 'react';
import './Header.scss';
import { UP_ARROW_KEY, DOWN_ARROW_KEY } from 'constants/constants';
import { useSelector } from 'react-redux';

const HEADER_ITEMS = [
  'Experience',
  'Education',
  'Projects',
  'Software',
  'Events',
  'About'
];

const ACTIVE_TAB_CLASS = 'active-tab';

export function Header() {
  const [screenOrientation, setScreenOrientation] = useState('');
  const activeTab = useSelector(state => state.activeTab);
  window.addEventListener('resize', setScreenOrientation);

  function isPortait(){
    console.log(`Screen orientation was checked: ${screenOrientation ? true : false}`);
    return window.matchMedia('(orientation: portrait)').matches;
  }

  function scrollToDirection(direction){
    if(isPortait()){
      window.location.href = `#${direction}`;
      return;
    }
     // fixes for Edge and Internet Explorer
    if(!!document.documentMode || !!window.StyleMedia){
      const end = direction === 'Top' ? 0 : document.body.scrollHeight;
      window.scrollTo(0, end);
    } else {
      const scrollObj = direction === 'Top' 
            ? {
                top: 0,
                left: 0,
                behavior: 'smooth'
              }
            : {
              top: document.body.scrollHeight,
              behavior: 'smooth'
            };
      window.scrollTo(scrollObj);
    }
  }

  function isActiveTab(tab, activeTab){
    return tab === activeTab ? ACTIVE_TAB_CLASS : '';
  }

  function generateHeaderItems(){
    const items = [];
    items.push(
      <div className='scroll-arrow-up'
            onClick={() => scrollToDirection('Top')}
            key={UP_ARROW_KEY}>
                    &#8593;
      </div>
    );

    HEADER_ITEMS.map(item => items.push(
      <div key={item}>
        <a href={'#' + item} className={isActiveTab(item, activeTab)}>
          {item}
        </a>
      </div>
    ));
    
    items.push(
      <div className='scroll-arrow-down'
          onClick={() => scrollToDirection('Bottom')}
          key={DOWN_ARROW_KEY}>
                  &#8595;
      </div>
      );
    return items;
  }
  
  return (
    <>
      <div id='Top'></div>
      <div className='Header' id='header-mobile'>
        {generateHeaderItems()}
      </div>
    </>
  );
}
