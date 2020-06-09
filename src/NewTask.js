import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/index';
class NewTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			taskName: "",
		}
	}

	submit(){
		const task = { name: this.state.taskName, isDone: false };
		fetch('http://localhost:8080/task/',{
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(task)
		}).then(function (response) {
			return response.json();
		}).then(data=> {
			task.id = data.id;
			this.props.onAddTask(task)
		});
		this.setState({taskName: ""});
	}

	handleClick(event) {
		this.submit();
	}

	handleChange(event){
		this.setState({taskName: event.target.value});
	}

	handleKeyPress(event){
		console.log(event.key);
		if(event.key === 'Enter'){
			this.submit();
		}
	}
	render() {
		return (<div>
			<h3>Add Task</h3>
			<div className="fg">
				<input type="text" value = {this.state.taskName} onChange= {(event)=>this.handleChange(event)} onKeyPress={(event) => this.handleKeyPress(event)}/>
				<button type="button" onClick={(event) => this.handleClick(event)}>Add</button>
			</div>
		</div>)
	}
}
const mapStateToProps = state => {
	return {

	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddTask: task => {
			dispatch(actions.addTask(task));
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(NewTask);