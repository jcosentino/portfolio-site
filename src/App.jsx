import React from 'react';
import './App.css';
import Title from './title';
import Construction from './construction';
import Footer from './footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Construction />
        <Footer />
      </div>
    );
  }
}

export default App;
