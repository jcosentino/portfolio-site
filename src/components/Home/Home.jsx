import React from 'react';
import './Home.scss';
import {
  HomeLanding,
  Experience,
  Education,
  Projects,
  Software,
  Events,
  About,
   } from './components';
   
function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const homeRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(divs => {
      divs.forEach(div => setVisible(div.isIntersecting));
    });
    observer.observe(homeRef.current);
  }, []);
  return (
    <div className={`home-fade-in ${isVisible ? 'visible' : ''}`}
         ref={homeRef}
    >
      {props.children}
    </div>
  );
}

function createHomeItem(div){
  return (
    <FadeInSection>
      {div}
    </FadeInSection>
  );
}

const HOME_TEMS = [
  <HomeLanding />,
  <Experience />,
  <Education />,
  <Projects />,
  <Software />,
  <Events />,
  <About />
];

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
