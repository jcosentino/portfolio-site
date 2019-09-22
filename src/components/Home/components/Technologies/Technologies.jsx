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
      <div id='technologies' className='home-item'>
        <h1>Technologies</h1>
        {this.testData()}
      </div>
    );
  }
}
