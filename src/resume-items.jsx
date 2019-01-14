import React, { Component } from 'react';
import './resume-items.css';

class ResumeItems extends Component {
	render(){
		return (
			<div className='resumeItems'>
				<ul>
					<li>Goodwill Industries</li>
					<li>Bloomberg LP</li>
					<li>CUNY CSI - OTS</li>
					<li>RFCUNY</li>
					<li>NYC Tech Talent Pipeline</li>
				</ul>
			</div>
		);
	}
}

export default ResumeItems;