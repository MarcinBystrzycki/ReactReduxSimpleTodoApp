import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../style/App.css';
import FaPlus from 'react-icons/lib/fa/plus';
import AddListForm from './AddListForm';

class AddList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
	}

	toggleModal = () => {
		this.setState({
			show: !this.state.show
		});
	}

	render() {
		return (
			<div className="AddListDiv text-right">
				<button className="AddListButton" onClick={this.toggleModal}>
					<span className="AddYourList">Add list </span>
					<FaPlus className="FaPlus"/>
				</button>
				<Modal className="Modal ModalAddList text-center" show={this.state.show} onHide={this.toggleModal}>
					<Modal.Header>
						<h4>Add your own list</h4>
					</Modal.Header>
					<Modal.Body>
						<AddListForm />
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default AddList;