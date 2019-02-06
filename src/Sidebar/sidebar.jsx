import React, { Component } from 'react';
import './sidebar.css';
import '../Home/home.css';

class Sidebar extends Component {
	render(){
		return(
			<div id='sidebar'>
				<a href='/'>Home</a>
				<a href='/about'>About Me</a>
				<a href='/employment'>Employment</a>
				<a href='/education'>Education</a>
				<a href='/hackathons'>Hackathons</a>
				<a href='/study-abroad'>Study Abroad</a>
				<a href='/volunteer'>Volunteerism</a>
				<a href='/portfolio-site'>johnscosentino.com</a>
				<a href='/csc450-project'>Research</a>
				<a href='/ctp-2016'>CTP 2016</a>
				<a href='/testdriven-project'>Testdriven</a>
				<a href='/keras-docker-sample'>Keras / Docker Example</a>
				<a href='/csc430-project'>CSC 430 Project (C#)</a>
				<a href='/csc305-lab2'>Fit Algorithms (C++)</a>
			</div>
		);
	}
}

export default Sidebar;