import React, { Component } from 'react';
import Title from './Title/title';
import Home from './Home/home';
import Footer from './Footer/footer';
import ErrorPage from './Error_page/error-page';
import Sidebar from './Sidebar/sidebar';
import ResumeItems from './Resume/resume-items';
import About from './About/about';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <div id='app'>
            <Title />
            <Sidebar />
            <div id='central'>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/employment' exact component={ResumeItems} />
                <Route component={ErrorPage} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;