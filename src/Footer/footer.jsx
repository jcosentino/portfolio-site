import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
	render(){
		return (
			<div>
				<table id='footer-table'>
					<tr>
						<td>
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

						<td>
							<a href='https://www.csi.cuny.edu/' target='_blank'>
								<span><img className='footer_img'
										   src='../images/csi.jpg'
							 			   alt='CUNY - CSI'/>
							 	</span>
							</a>
						</td>
					</tr>
				</table>
				{/*<footer className='footer text-center'>
					<a style={{display: "table-cell"}} 
					   target="_blank" 
					   href='https://eff.org/'>
						<img className='footer_img'
							 src='../images/eff2019.png'
							 alt='EFF'/>
					</a>

					<a style={{display: "table-cell"}} 
					   target="_blank" 
					   href='https://www.linkedin.com/in/john-cosentino/'>
						<img className='footer_img'
							 src='../images/linkedin.png'
							 alt='LinkedIn'/>
					</a>

					<a style={{display: "table-cell"}} 
					   target="_blank" 
					   href='https://reactjs.org/'>
						<img className='footer_img'
							 src='../images/react.png'
							 alt='ReactJS'/>
					</a>

					<a style={{display: "table-cell"}} target="_blank" href='https://github.com/jcosentino'>
						<img className='footer_img'
							 src='../images/github.png'
							 alt='Github:jcosentino/'/>
					</a>

					<a style={{display: "table-cell"}} 
					   target="_blank" 
					   href='https://www.csi.cuny.edu/'>
						<img className='footer_img'
							 src='../images/csi.jpg'
							 alt='CUNY - CSI'/>
					</a>
				</footer>*/}
			</div>
		);
	}
}

export default Footer;