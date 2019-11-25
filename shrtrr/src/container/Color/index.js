import React, { Component } from 'react';
import './index.css';

class Color extends Component {
	constructor(props) {
		super(props);
		this.newColor = this.newColor.bind(this);
	}
	componentDidMount() {
		this.newColor();
	}
	render() {
		return (
			<input className="color" type="button" value="New Color 🎨" onClick={this.newColor} />
		);
	}
	newColor() {
		const randomColor = `#${((1 << 24) * Math.random() | 0).toString(16)}`;
		document.documentElement.style.setProperty('--main-bg-color', randomColor);
	}
}

export default Color;
