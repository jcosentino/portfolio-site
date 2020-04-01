import React from 'react';
import './App.scss';
import { Home, Header, Footer, IEError, Modal } from './components';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { detect } from 'detect-browser';
import { INTERNET_EXPLORER } from 'constants/constants';

function App(){
  // Check if Internet Explorer
  if(detect().name === INTERNET_EXPLORER){
    return <IEError />;
  }

  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Modal />
          <div className='mobile-container'>
            <Header />
            <Home />
          </div>
          <Footer />
        </div>
        <Switch>
          <Redirect from='*' to='' />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
