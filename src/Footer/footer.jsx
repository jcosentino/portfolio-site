import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
	render(){
		return (
			<div>
				<table id='footer-table'>
					<tr>
						<td id='first-row'>
							<a href='https://eff.org/' target='_blank'>
								<span><img className='footer_img'
										   src='../images/eff2019.png'
							 			   alt='EFF'/>
							 	</span>
							</a>
						</td>

						<td>
							<a href='https://www.linkedin.com/in/john-cosentino/' target='_blank'>
								<span><img className='footer_img'
										   src='../images/linkedin.png'
							 			   alt='LinkedIn'/>
							 	</span>
							</a>
						</td>

						<td>
							<a href='https://reactjs.org/' target='_blank'>
								<span><img className='footer_img'
										   src='../images/react.png'
							 			   alt='ReactJS'/>
							 	</span>
							</a>
						</td>

						<td>
							<a href='https://github.com/jcosentino' target='_blank'>
								<span><img className='footer_img'
										   src='../images/github.png'
							 			   alt='Github'/>
							 	</span>
							</a>
						</td>

						<td id='last-row'>
							<a href='https://www.csi.cuny.edu/' target='_blank'>
								<span><img className='footer_img'
										   src='../images/csi.jpg'
							 			   alt='CUNY - CSI'/>
							 	</span>
							</a>
						</td>
					</tr>
				</table>
			</div>
		);
	}
}

export default Footer;