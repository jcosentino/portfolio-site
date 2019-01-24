import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
	render(){
		return (
			<div>
				<footer className='footer text-center'>
					<a href='https://eff.org/'>
						<img className='footer_img'
							 src='../images/eff2019.png'
							 alt='EFF'/>
					</a>

					<a href='https://www.linkedin.com/in/john-cosentino/'>
						<img className='footer_img'
							 src='../images/linkedin.png'
							 alt='LinkedIn'/>
					</a>

					<a href='https://reactjs.org/'>
						<img className='footer_img'
							 src='../images/react.png'
							 alt='ReactJS'/>
					</a>

					<a href='https://github.com/jcosentino'>
						<img className='footer_img'
							 src='../images/github.png'
							 alt='Github:jcosentino/'/>
					</a>

					<a href='https://www.csi.cuny.edu/'>
						<img className='footer_img'
							 src='../images/csi.jpg'
							 alt='CUNY - CSI'/>
					</a>
				</footer>
			</div>
		);
	}
}

export default Footer;