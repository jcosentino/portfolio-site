import React from 'react';
import './title.css';
import { Jumbotron } from 'reactstrap';

class Title extends React.Component {
	render(){
		return (
			<Jumbotron id='title-area' className='text-center'>
					<h1>John Cosentino</h1>
	        		<h3>Software Engineer</h3>
					<p>Contact: <a href='mailto:john.s.cosentino@gmail.com'>john.s.cosentino@gmail.com</a></p>
			</Jumbotron>
		);
	}
}

export default Title;