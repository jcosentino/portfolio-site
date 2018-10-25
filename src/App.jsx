import React from 'react';
import './App.css';
import Title from './title';
import Gallery from './gallery';
import Footer from './footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default App;
