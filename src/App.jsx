import React from 'react';
import './App.css';
import Title from './title';
import Construction from './construction';
import Eff from './eff';
import Ingredients from './ingredients';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Construction />
        <Eff />
        <Ingredients />
      </div>
    );
  }
}

export default App;
