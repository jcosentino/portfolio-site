import React from 'react';
import './Technologies.scss';

export class Technologies extends React.Component {
  testData(){
    const arr = [];
    for(let i = 0; i < 50; i++){
      arr.push(<p>TEST</p>);
    }
    return arr;
  }
  render(){
    return (
      <div className='Technologies home-item'>
        Technologies
        {/* temporary */}
        {this.testData()}
      </div>
    );
  }
}
