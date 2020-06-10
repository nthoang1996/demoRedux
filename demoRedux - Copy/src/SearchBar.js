import React from 'react';
class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		}
	}

	clearTearm(event) {
		// this.setState({query: ''});
		// this.props.onUpdateQuery('');
	}

	handleChange(event){
		// this.setState({query: event.target.value})
		// this.props.onUpdateQuery(event.target.value);
		// if (event.keyCode == 27) { 
		// 	this.setState({query: ''});
		// 	this.props.onUpdateQuery('');
    	// }
	}

	handleKeyPress(event){
		// console.log(event.key);
		// if(event.key === 'Escape'){
		// 	this.setState({query: ''});
		// 	this.props.onUpdateQuery('');
		// }
	}

	render() {
		return (<div>
			<label style={{ fontWeight: 'bold' }}>
				Filter tasks (by name)
        <div className="fg">
					<input type="text" value = {this.state.query} onChange = {(event)=>this.handleChange(event)} onKeyDown={(event) => this.handleKeyPress(event)}/>
					<button type="button" onClick={(event) => this.clearTearm(event)}>Clear</button>
				</div>
			</label>
		</div>)
	}
}

export default SearchBar;