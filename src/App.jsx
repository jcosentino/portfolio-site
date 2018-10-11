import React from 'react';
import './App.css';
import Title from './title';
import Construction from './construction';
import Eff from './eff';

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
