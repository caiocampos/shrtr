import React, { Component } from 'react';
import './index.css';
import Constants from '../../constants';
import Router from '../Router';

class E404 extends Component {
	state = {
		time: 6
	}
	componentDidMount() {
		this.countDown();
	}
	constructor(props) {
		super(props);
		this.countDown = this.countDown.bind(this);
	}
	render() {
		return (
			<div className="main">
				<h1>404</h1>
				<h3>File not found</h3>
				<h4>You will be redirected in {this.state.time} seconds</h4>
			</div>
		);
	}
	countDown() {
		if (!this.state.time) {
			Router.navigateTo(Constants.self);
		} else {
			this.setState({ time: this.state.time - 1 });
			setTimeout(this.countDown, 1000);
		}
	}
}

export default E404;
