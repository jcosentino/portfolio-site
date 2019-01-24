import React, { Component } from 'react';
import './gallery.css';

class Gallery extends Component {
  render(){
    return (
        <div className='gallery'>
          <img src='../images/gallery/john-party.png'
               alt='john'/>
        </div>
    );
  }
}

export default Gallery;