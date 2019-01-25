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
			</div>
		);
	}
}

export default Sidebar;