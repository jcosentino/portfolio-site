import React, { Component } from 'react';
import './error-page.css';

class ErrorPage extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<h1>There is no page for <span className='routeurl'>{this.props.location.pathname}</span>!</h1>
				<h1>Please click <a href='/'>here</a> to return home.</h1>
			</div>
		);
	}
}

export default ErrorPage;