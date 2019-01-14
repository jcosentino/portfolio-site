import React, { Component } from 'react';
import Gallery from './gallery';
import ResumeItems from './resume-items';
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