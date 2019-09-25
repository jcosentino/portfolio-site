import React from 'react';
import './Header.scss';

export class Header extends React.Component {
    headerItems = [
      'Experience',
      'Education',
      'Projects',
      'Technologies',
      'Hobbies'
    ];

    scrollToTop(){
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
      });
    }

    scrollToBottom(){
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }

    generateHeaderItems(){
      const items = [];
      items.push(<div className='scroll-arrow'
                      onClick={this.scrollToTop}>
                    <i className='arrow up'></i>
                  </div>);
      this.headerItems.map(item => items.push(
        <div><a href={'#' + item}>{item}</a></div>
      ));
      items.push(<div className='scroll-arrow'
                      onClick={this.scrollToBottom}>
                   <i className='arrow down'></i>
                 </div>);
      return items;
    }

  render(){
    return (
      <div className='Header'>
        {this.generateHeaderItems()}
      </div>
    );
  }
}
