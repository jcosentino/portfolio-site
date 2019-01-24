import React from 'react';
import './title.css';

class Title extends React.Component {
	render(){
		return (
			<div id='title-area' className='jumbotron text-center'>
        		<h1>John Cosentino</h1>
        		<h3>Software Engineer</h3>
				<p>Contact: <a href='john.s.cosentino@gmail.com'>john.s.cosentino@gmail.com</a></p>
        	</div>
		);
	}
}

export default Title;