import React, { Component } from 'react';
import Gallery from '../Gallery/gallery';
import ResumeItems from '../Resume/resume-items';
import './home.css';

class Home extends Component {
	render(){
		return (
			<div id='central'>
				<Gallery />
				<ResumeItems />
			</div>
		);
	}
}

export default Home;