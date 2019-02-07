import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import '../Home/home.css';

class Sidebar extends Component {
	render(){
		return(
			<div id='sidebar'>
				<Link to={`/`}>Home</Link>
				<Link to={`/about`}>About</Link>
                <Link to={`/employment`}>Employment</Link>
				<Link to={`/education`}>Education</Link>
				<Link to={`/hackathons`}>Hackathons</Link>
				<Link to={`/study-abroad`}>Study Abroad</Link>
                <Link to={`/employment`}>Volunteerism</Link>
				<Link to={`/portfolio-site`}>johnscosentino.com</Link>
				<Link to={`/csc450-project`}>Research</Link>
				<Link to={`/ctp-2016`}>CTP 2016</Link>
                <Link to={`/testdriven-project`}>Testdriven</Link>
				<Link to={`/keras-docker-sample`}>Keras / Docker Example</Link>
				<Link to={`/csc430-project`}>CSC 430 Project (C#)</Link>
				<Link to={`/csc305-lab2`}>Fit Algorithms (C++)</Link>
			</div>
		);
	}
}

export default Sidebar;