import React from 'react';
import './App.css';
import Title from './title.js';
import Construction from './construction.js';
import Eff from './eff.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Construction />
        <Eff />
      </div>
    );
  }
}

export default App;
