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

    generateHeaderItems(){
      const items = [];
      this.headerItems.map(item => items.push(
        <div><a href={'#' + item}>{item}</a></div>
      ));
      return items;
    }

  render(){
    return (
      <div className="Header">
        {this.generateHeaderItems()}
      </div>
    );
  }
}
