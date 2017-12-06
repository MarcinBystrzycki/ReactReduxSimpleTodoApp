import React, { Component } from 'react';
import FaEdit from 'react-icons/lib/fa/edit';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import EditTodoForm from './EditTodoForm';

class EditTodo extends Component {
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
			<div>
				<FaEdit className="EditTodoButton" onClick={this.toggleModal}  />
				<Modal className="Modal ModalAddList text-center" show={this.state.show} onHide={this.toggleModal}>
					<Modal.Header>
						<h4>Edit your record</h4>
					</Modal.Header>
					<Modal.Body>
						<EditTodoForm id={this.props.id}/>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default EditTodo;