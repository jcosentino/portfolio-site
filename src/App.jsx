import React, { Component } from 'react';
import Title from './Components/Title/title';
import Home from './Components/Home/home';
import Footer from './Components/Footer/footer';
import ErrorPage from './Components/Error_page/error-page';
import Sidebar from './Components/Sidebar/sidebar';
import ResumeItems from './Components/Resume/resume-items';
import About from '././Components/About/about';
import Placeholder from './Components/Placeholder/placeholder';
import Education from './Components/Education/education';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div id='app'>
            <Sidebar />
            <div id='not-sidebar'>
                <Title />
                <div id='central'>
                  <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About} />
                    <Route path='/employment' exact component={ResumeItems} />
                    <Route path='/education' exact component={Education} />
                    <Route path='/hackathons' exact component={Placeholder} />
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
          </div>
        </Router>
    );
  }
}

export default App;