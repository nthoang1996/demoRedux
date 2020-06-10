import React from 'react';
import TaskItem from './TaskItem';
class Task extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			query: ""
		}
	}

	componentDidMount() {
		// this.setState({ query: this.props.query.toLocaleLowerCase() })
		// const response = fetch('http://localhost:8080/task/').then(response => response.json())
		// 	.then(json => {
		// 		// this.props.onInitTask(json.data);
		// 		this.setState({tasks: this.props.tasks})
		// 	});
	}

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	if (nextProps.query !== prevState.query) {
	// 		const queryTask = nextProps.tasks.filter(
	// 			t => t.name.toLocaleLowerCase().includes(nextProps.query.toLocaleLowerCase())
	// 		);
	// 		return { query: nextProps.query.toLocaleLowerCase(),
	// 		tasks: queryTask};
	// 	}
	// 	else if(nextProps.tasks !== prevState.tasks){
	// 		const queryTask = nextProps.tasks.filter(
	// 			t => t.name.toLocaleLowerCase().includes(prevState.query.toLocaleLowerCase())
	// 		);
	// 		return { 
	// 			tasks: queryTask,
	// 		};
	// 	}
	// 	else return null;
	// }

	generateTask() {
		return this.state.tasks.map((taskItem, index) => <TaskItem task_item={taskItem} key={index} />)
	}
	render() {
		return (<div>
			<h3>Todo</h3>
			<ul>
				{this.generateTask()}
			</ul>
		</div>)
	}
}

export default Task;