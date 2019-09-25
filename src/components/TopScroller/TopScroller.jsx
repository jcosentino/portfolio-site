import React from 'react';
import './TopScroller.scss';

export class TopScroller extends React.Component {
    clicked(){
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        });
    }

    render(){
        return (
            <div className='TopScroller'
                 onClick={this.clicked}
            >
            </div>
        );
  }
}
