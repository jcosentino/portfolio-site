import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
	render(){
		return (
			<div>
				<footer class='footer text-center'>
					<a href='https://eff.org/'>
						<img class='footer_img'
							 src='../images/eff2019.png'
							 alt='EFF'/>
					</a>

					<a href='https://reactjs.org/'>
						<img class='footer_img'
							 src='../images/react.png'
							 alt='ReactJS'/>
					</a>

					<a href='https://www.linkedin.com/in/john-cosentino/'>
						<img class='footer_img'
							 src='../images/linkedin.png'
							 alt='LinkedIn'/>
					</a>

					<a href='https://github.com/jcosentino'>
						<img class='footer_img'
							 src='../images/github.png'
							 alt='Github:jcosentino/'/>
					</a>

					<a href='https://www.csi.cuny.edu/'>
						<img class='footer_img'
							 src='../images/csi.jpg'
							 alt='CUNY - CSI'/>
					</a>
				</footer>
			</div>
		);
	}
}

export default Footer;