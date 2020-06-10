import React from 'react';
// import { connect } from 'react-redux';
// import * as actions from './actions/index';
class TaskItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	handleClick(event) {
		const body = {isDone: true};
		fetch('http://localhost:8080/task/' + this.props.task_item.id,{
			method: 'put',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}).then(function (response) {
			return response.json();
		}).then(data=> {
			// this.props.onDeleteTask(this.props.task_item.id);
		});
	}
	render() {
		return (<li className={!this.props.task_item.isDone ? "" : "done"}>
			{this.props.task_item.name}
			{!this.props.task_item.isDone ? <button onClick={(event) =>this.handleClick(event)}>Delete</button> : <div></div>}
		</li>)
	}
}

// const mapStateToProps = state => {
// 	return {

// 	}
// }

// const mapDispatchToProps = (dispatch, props) => {
// 	return {
// 		onDeleteTask: id => {
// 			dispatch(actions.deleteTask(id));
// 		}
// 	}
// }
export default TaskItem;