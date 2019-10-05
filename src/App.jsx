import React from 'react';
import './App.scss';
import { Home, Header, Footer } from './components';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <div className='App'>
      <div className='mobile-container'>
        <Header />
        <Home />
      </div>
      <Footer />
    </div>
    <Switch>
      <Redirect from="*" to='' />
    </Switch>
    </BrowserRouter>
    </>
    );
}

export default App;
