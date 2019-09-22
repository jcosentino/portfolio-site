import React from 'react';
import './App.scss';
import { Home, Header, Footer } from './components';

class App extends React.Component {
  render(){
    return (
      <div className='App'>
        <div className='mobile-container'>
          <Header />
          <Home />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
