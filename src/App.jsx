import React from 'react';
import './App.css';
import Title from './title';
import Gallery from './gallery';
import ResumeItems from './resume-items';
import Footer from './footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <div id='central'>
        	<Gallery />
        	<ResumeItems />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;