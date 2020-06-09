import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/index';
class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		}
	}

	clearTearm(event) {
		this.setState({query: ''});
	}

	handleChange(event){
		this.setState({query: event.target.value})
		this.props.onUpdateQuery(event.target.value);
	}

	render() {
		return (<div>
			<label style={{ fontWeight: 'bold' }}>
				Filter tasks (by name)
        <div className="fg">
					<input type="text" value = {this.state.query} onChange = {(event)=>this.handleChange(event)} />
					<button type="button" onClick={(event) => this.clearTearm(event)}>Clear</button>
				</div>
			</label>
		</div>)
	}
}

const mapStateToProps = state => {
	return {

	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onUpdateQuery: query => {
			dispatch(actions.updateQuery(query));
		},
		onFilterTask: query => {
			dispatch(actions.filterTask(query));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);