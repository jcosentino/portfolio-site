import React from 'react';
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
  const activeTab = useSelector(state => state.activeTab);
  
  function scrollToTop(){ // fixes for Edge and Internet Explorer
    if(!!document.documentMode || !!window.StyleMedia){
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  function scrollToBottom(){
    if(!!document.documentMode || !!window.StyleMedia){
      window.scrollTo(0, document.body.scrollHeight);
    } else{
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  }

  function isActiveTab(tab, activeTab){
    return tab === activeTab ? ACTIVE_TAB_CLASS : '';
  }

  function generateHeaderItems(){
    const items = [];
    items.push(
      <div className='scroll-arrow-up'
            onClick={scrollToTop}
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
          onClick={scrollToBottom}
          key={DOWN_ARROW_KEY}>
                  &#8595;
      </div>
      );
    return items;
  }
  
  return (
    <div className='Header'>
      {generateHeaderItems()}
    </div>
  );
}
