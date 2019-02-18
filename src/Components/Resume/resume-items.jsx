import React, { Component } from 'react';
import './resume-items.css';
import { Collapse, CardBody, Card } from 'reactstrap';
import ITEMS from '../../Objects/resume_items_list';

class ResumeItems extends Component {
	constructor(props){
		super(props);
		this.toggle = this.toggle.bind(this);
		this.createItem = this.createItem.bind(this);
		this.createListOfItems = this.createListOfItems.bind(this);

		this.state = { 
			collapseGoodwill: false,
			collapseBloomberg: false,
			collapseCunycsi: false,
			collapseRfcuny: false,
			collapseCtp2016: false,
		};
	}

	toggle(job){
		switch(job){
			case 'goodwill':
				this.setState({ collapseGoodwill: !this.state.collapseGoodwill });
			break;

			case 'bloomberg':
				this.setState({ collapseBloomberg: !this.state.collapseBloomberg });
			break;

			case 'cunycsi':
				this.setState({ collapseCunycsi: !this.state.collapseCunycsi });
			break;

			case 'rfcuny':
				this.setState({ collapseRfcuny: !this.state.collapseRfcuny });
			break;

			case 'ctp2016':
				this.setState({ collapseCtp2016: !this.state.collapseCtp2016 });
			break;

			default:
			break;
		}
	}

	createItem(toggleItem, listEntry, stateItem, cardBodyEntry){
		return (
			<>
				<li className='resume-list-item' 
					onClick={() => this.toggle(toggleItem)}>
						<i className='side-arrow'></i> {listEntry}
				</li>
				<Collapse isOpen={this.state[stateItem]} 
						  className='collapse-bio'>
					<Card>
						<CardBody>
							{cardBodyEntry}
						</CardBody>
					</Card>
				</Collapse>
			</>
		);
	}

	createListOfItems(){
		return (
			ITEMS.map(
				item => this.createItem(
					item.toggleItem, item.listEntry,
					item.stateItem, item.cardBodyEntry
				)
			)
		);
	}

	render(){
		return (
			<div className='resumeItems'>
				<ul>
					{this.createListOfItems()}
				</ul>
			</div>
		);
	}
}

export default ResumeItems;