import React from 'react';
import './Header.scss';
import { UP_ARROW_KEY, DOWN_ARROW_KEY } from 'constants/constants';

const HEADER_ITEMS = [
  'Experience',
  'Education',
  'Projects',
  'Software',
  'Events',
  'About'
];

export function Header() {
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
      <div key={items}><a href={'#' + item}>{item}</a></div>
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
