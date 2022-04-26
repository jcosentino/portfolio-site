/* eslint-disable react/jsx-indent-props */
import React from 'react';
import './App.scss';
import {
  BrowserRouter, Switch, Redirect, Route,
} from 'react-router-dom';
import { detect } from 'detect-browser';
import { INTERNET_EXPLORER } from 'constants/constants';
import { PO_SEARCH_HOST_ROUTE, PO_SEARCH_HOST_URL } from 'constants/external_urls';
import {
  Home, Header, Footer, IEError, Modal,
} from './components';

function App(): JSX.Element {
  // Check if Internet Explorer
  if (detect()?.name === INTERNET_EXPLORER) {
    return <IEError />;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Modal />
        <div className="mobile-container">
          <Header />
          <Home />
        </div>
        <Footer />
      </div>
      <Switch>
        <Route
            path={PO_SEARCH_HOST_ROUTE}
            component={() => {
              window.location.href = PO_SEARCH_HOST_URL;
              return null;
            }}
        />
        <Redirect from="*" to="" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
