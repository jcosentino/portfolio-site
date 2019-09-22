import React from 'react';
import './Header.scss';

export class Header extends React.Component {
    headerItems = [
      'Education',
      'Experience',
      'Projects',
      'Technologies',
      'Hobbies'
    ];

    generateHeaderItems(){
      const items = [];
      this.headerItems.map(item => items.push(<div>{item}</div>));
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
