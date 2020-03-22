import React from 'react';
import './Header.scss';

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
    items.push(<div className='scroll-arrow-up'
                    onClick={scrollToTop}>
                  &#8593;
                </div>);
    HEADER_ITEMS.map(item => items.push(
      <div><a href={'#' + item}>{item}</a></div>
    ));
    items.push(<div className='scroll-arrow-down'
                    onClick={scrollToBottom}>
                 &#8595;
               </div>);
    return items;
  }
  
  return (
    <div className='Header'>
      {generateHeaderItems()}
    </div>
  );
}
