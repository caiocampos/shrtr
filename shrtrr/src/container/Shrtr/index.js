import React, { Component } from 'react';
import './index.css';
import ShrtrService from './shrtr.service';

class Shrtr extends Component {
	state = {
		link: '',
		shrt: '',
		response: ''
	}
	constructor(props) {
		super(props);
		this.shorten = this.shorten.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.setResponse = this.setResponse.bind(this);
	}
	componentDidMount() {
		this.setResponse();
	}
	render() {
		return (
			<div className="main">
				<div className="title">
					<h1>Shrtr</h1>
					<h3>The independent shortener</h3>
				</div>
				<h4 id="response">{this.state.response}</h4>
				<div className="form" onSubmit={this.shorten}>
					<form>
						<input name="link" value={this.state.link}
							type="text" onChange={this.handleInputChange}
							placeholder="🌐 Enter the long URL" required />
						<input name="shrt" value={this.state.shrt}
							type="text" onChange={this.handleInputChange}
							placeholder="🌐 Custom alias (optional)" />
						<input type="submit" value="Shorten 🔗" />
					</form>
				</div>
			</div>
		);
	}
	setResponse(response) {
		if (!response) {
			response = "Please enter a link to shorten";
		}
		this.setState({ response: response });
	}
	handleInputChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({
			[name]: value
		});
	}
	shorten(event) {
		event.preventDefault();
		if (!this.state.link) {
			this.setResponse();
			return;
		}
		this.setResponse("Loading...");
		ShrtrService.shorten(this.state.link, this.state.shrt)
			.then(res => {
				this.setResponse(res);
			});
	}
}

export default Shrtr;
