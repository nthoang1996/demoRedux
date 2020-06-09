import React from 'react';
import './App.css';
import Task from './Task';
import NewTask from './NewTask'
import SearchBar from './SearchBar';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (
				<div className="App">
					<div className="container">
						<SearchBar />
						<Task />
						<NewTask />
					</div>
				</div>)
	}
}

// function App() {
//   return (
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
//   );
// }

export default App;
