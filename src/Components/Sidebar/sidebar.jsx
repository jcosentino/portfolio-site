import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import '../Home/home.css';
import LINKS from '../../Objects/sidebar_items';

class Sidebar extends Component {
	constructor(props){
		super(props);
		this.createLinkItems = this.createLinkItems.bind(this);
	}

	createLinkItems(){
		let linkItems = [];
		for(let link of LINKS){
			let tempElement = 
				<Link to={link['url']}>{link['description']}</Link>;
			linkItems.push(tempElement);
		}
		return <>{linkItems}</>;
	}

	render(){
		return(
			<div id='sidebar'>
				{this.createLinkItems()}
			</div>
		);
	}
}

export default Sidebar;