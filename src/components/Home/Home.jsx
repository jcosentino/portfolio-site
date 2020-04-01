import React, { useEffect, useState, useRef } from 'react';
import './Home.scss';
import { useDispatch } from 'react-redux';
import {
  HomeLanding,
  Experience,
  Education,
  Projects,
  Software,
  Events,
  About,
   } from './components';
import { changeActiveTab } from 'redux_items/actions/index';

const HOME_TEMS = [
  {
    "component": <HomeLanding />,
    "heading": "HomeLanding"
  },
  {
    "component": <Experience />,
    "heading": "Experience"
  },
  {
    "component": <Education />,
    "heading": "Education"
  },
  {
    "component": <Projects />,
    "heading": "Projects"
  },
  {
    "component": <Software />,
    "heading": "Software"
  },
  {
    "component": <Events />,
    "heading": "Events"
  },
  {
    "component": <About />,
    "heading": "About"
  }
];

function FadeInSection(props) {
  const { tab } = props;
  const [isVisible, setVisible] = useState(false);
  const homeRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(divs => {
      divs.forEach(div => {
        setVisible(div.isIntersecting)
      });
    });
    observer.observe(homeRef.current);
  });

  function isTabVisible(visibility, tabName){
    if(visibility){ dispatch(changeActiveTab(tabName)); }
    return visibility ? 'visible' : '';
  }

  return (
    <div className={`home-fade-in ${isTabVisible(isVisible, tab)}`}
         ref={homeRef}
    >
      {props.children}
    </div>
  );
}

function createHomeItem(home_item){
  return (
    <FadeInSection tab={home_item.heading}>
      {home_item.component}
    </FadeInSection>
  );
}

const HOME_ITEM_DIVS = HOME_TEMS.map(div => 
  createHomeItem(div)
);

export function Home(){
  return (
    <div className='Home'>
      {HOME_ITEM_DIVS[0]}
      <div className='home-menu-items'>
        {HOME_ITEM_DIVS.slice(1)}
      </div>
    </div>
  );
}
