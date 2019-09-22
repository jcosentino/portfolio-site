import React from 'react';
import './App.scss';
import { Home, Header, Footer } from './components';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
