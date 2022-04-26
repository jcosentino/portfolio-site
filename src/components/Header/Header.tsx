import React, { useState, Dispatch } from 'react';
import './Header.scss';
import { UP_ARROW_KEY, DOWN_ARROW_KEY, HEADER_ITEMS } from 'constants/constants';
import { useSelector, useDispatch } from 'react-redux';
import changeActiveTab from 'redux_items/actions/index';
import { IReduxTypes } from 'custom_types/redux_types';

const ACTIVE_TAB_CLASS: string = 'active-tab';

function Header(): JSX.Element {
  const [screenOrientation, setScreenOrientation] = useState<UIEvent | string>('');
  const activeTab: string = useSelector((state: IReduxTypes.TabState) => state.activeTab);
  const dispatch: Dispatch<any> = useDispatch();
  window.addEventListener('resize', setScreenOrientation);

  function isPortait(): boolean {
    // eslint-disable-next-line no-console
    console.log(`Screen orientation was checked: ${screenOrientation === ''}`);
    return window.matchMedia('(orientation: portrait)').matches;
  }

  function scrollToDirection(direction: string): void {
    if (isPortait()) {
      window.location.href = `#${direction}`;
      return;
    }
    // fixes for Edge and Internet Explorer
    if (!!document.DOCUMENT_NODE || !!window.StyleMedia) {
      const end: number = direction === 'Top' ? 0 : document.body.scrollHeight;
      window.scrollTo(0, end);
    } else {
      const scrollObj: ScrollToOptions = direction === 'Top'
        ? {
          top: 0,
          left: 0,
          behavior: 'smooth',
        }
        : {
          top: document.body.scrollHeight,
          behavior: 'smooth',
        };
      window.scrollTo(scrollObj);
    }
  }

  function isActiveTab(tab: string): string {
    return tab === activeTab ? ACTIVE_TAB_CLASS : '';
  }

  function activeTabClick(tabName: string): void {
    setTimeout(() => {
      dispatch(changeActiveTab((tabName)));
    }, 600); // transition time for .home-fade-in
  }

  function scrollToDirectionImpl(direction: string) {
    return () => scrollToDirection(direction);
  }

  function generateHeaderItems(): JSX.Element[] {
    const items: JSX.Element[] = [];
    items.push(
      <div
        className="scroll-arrow-up"
        onClick={scrollToDirectionImpl('Top')}
        onKeyDown={scrollToDirectionImpl('Top')}
        key={UP_ARROW_KEY}
        role="button"
        tabIndex={0}
      >
        &#8593;
      </div>,
    );

    HEADER_ITEMS.forEach((item: string) => items.push(
      <div
        key={item}
        onClick={() => activeTabClick(item)}
        onKeyDown={() => activeTabClick(item)}
        role="button"
        tabIndex={0}
      >
        <a href={`#${item}`} className={isActiveTab(item)}>
          {item}
        </a>
      </div>,
    ));

    items.push(
      <div
        className="scroll-arrow-down"
        onClick={scrollToDirectionImpl('Bottom')}
        onKeyDown={scrollToDirectionImpl('Bottom')}
        key={DOWN_ARROW_KEY}
        role="button"
        tabIndex={0}
      >
        &#8595;
      </div>,
    );
    return items;
  }

  return (
    <>
      <div id="Top" />
      <div className="Header" id="header-mobile">
        {generateHeaderItems()}
      </div>
    </>
  );
}

export default Header;
