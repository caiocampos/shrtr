import React, { Component } from 'react';
import './index.css';
import Shrtr from '../Shrtr';
import Color from '../Color';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Color />
				<Shrtr />
			</div>
		);
	}
}

export default App;
