import React, { Component } from 'react';
import './App.css';
import Title from './Title/title';
import Home from './Home/home';
import Footer from './Footer/footer';
import ErrorPage from './Error_page/error-page';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Title />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route component={ErrorPage} />
            </Switch>
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;