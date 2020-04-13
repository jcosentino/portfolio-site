import React, { useEffect, useState, useRef, MutableRefObject } from 'react';
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
import { IHome } from 'custom_types/home_types';
import { Dispatch } from 'redux';

const HOME_TEMS: IHome.HomeItem[] = [
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

function FadeInSection(props: IHome.FadeInSectionProps): JSX.Element {
  const { tab } = props;
  const [isVisible, setVisible] = useState<boolean>(false);
  const homeRef: MutableRefObject<any> = useRef();
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(divs => {
      divs.forEach(div => {
        setVisible(div.isIntersecting)
      });
    });
    observer.observe(homeRef.current);
  });

  function isTabVisible(visibility: boolean, tabName: string): string {
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

function createHomeItem(home_item: IHome.HomeItem): JSX.Element {
  return (
    <React.Fragment key={home_item.heading}>
      <FadeInSection tab={home_item.heading}>
        {home_item.component}
      </FadeInSection>
    </React.Fragment>
  );
}

const HOME_ITEM_DIVS: JSX.Element[] = HOME_TEMS.map((div: IHome.HomeItem) => 
  createHomeItem(div)
);

export function Home(): JSX.Element {
  return (
    <div className='Home'>
      {HOME_ITEM_DIVS[0]}
      <div className='home-menu-items'>
        {HOME_ITEM_DIVS.slice(1)}
      </div>
    </div>
  );
}
