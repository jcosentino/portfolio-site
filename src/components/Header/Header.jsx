import React from 'react';
import './Header.scss';

export class Header extends React.Component {
    headerItems = [
      'Experience',
      'Education',
      'Projects',
      'Technologies',
      'About'
    ];

    scrollToTop(){ // fixes for Edge and Internet Explorer
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

    scrollToBottom(){
      if(!!document.documentMode || !!window.StyleMedia){
        window.scrollTo(0, document.body.scrollHeight);
      } else{
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }
    }

    generateHeaderItems(){
      const items = [];
      items.push(<div className='scroll-arrow-up'
                      onClick={this.scrollToTop}>
                    &#8593;
                  </div>);
      this.headerItems.map(item => items.push(
        <div><a href={'#' + item}>{item}</a></div>
      ));
      items.push(<div className='scroll-arrow-down'
                      onClick={this.scrollToBottom}>
                   &#8595;
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
