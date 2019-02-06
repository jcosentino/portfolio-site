import React, { Component } from 'react';
import Title from './Title/title';
import Home from './Home/home';
import Footer from './Footer/footer';
import ErrorPage from './Error_page/error-page';
import Sidebar from './Sidebar/sidebar';
import ResumeItems from './Resume/resume-items';
import About from './About/about';
import Placeholder from './Placeholder/placeholder';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

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
                <Route path='/education' exact component={Placeholder} />
                <Route path='/study-abroad' exact component={Placeholder} />
                <Route path='/volunteer' exact component={Placeholder} />
                <Route path='/portfolio-site' exact component={Placeholder} />
                <Route path='/csc450-project' exact component={Placeholder} />
                <Route path='/ctp-2016' exact component={Placeholder} />
                <Route path='/testdriven-project' exact component={Placeholder} />
                <Route path='/keras-docker-sample' exact component={Placeholder} />
                <Route path='/csc430-project' exact component={Placeholder} />
                <Route path='/csc305-lab2' exact component={Placeholder} />
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