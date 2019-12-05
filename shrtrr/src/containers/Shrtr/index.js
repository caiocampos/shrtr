import React, { PureComponent } from 'react';
import Wrapper from '../../components/Wrapper';
import Status from '../../components/Status';
import Title from '../../components/Title';
import Form from '../../components/Form';
import Service from '../../services/shrtr.service';

const defaultMessage = 'Please enter a link to shorten';

class Shrtr extends PureComponent {
	state = {
		link: '',
		shrt: '',
		response: defaultMessage,
		loading: false
	};
	setResponse = response => {
		if (!response) {
			response = defaultMessage;
		}
		this.setState({ response: response });
	};
	loading = (loading = true) => {
		this.setState({ loading: loading });
	};
	handleInputChange = event => {
		event.preventDefault();
		const target = event.target;
		const name = target.name;
		const value =
			target.type === 'checkbox' ? target.checked : target.value;
		this.setState({
			[name]: value
		});
	};
	shorten = event => {
		event.preventDefault();
		if (!this.state.link) {
			this.setResponse();
			return;
		}
		this.loading();
		Service.shorten(this.state.link, this.state.shrt).then(res => {
			this.setResponse(res);
			this.loading(false);
		});
	};
	getStatus = () => (this.state.loading ? 'Loading...' : this.state.response);
	getTextInputList = () => [
		{
			name: 'link',
			value: this.state.link,
			changed: this.handleInputChange,
			placeholder: '🌐 Enter the long URL',
			required: true,
			focus: true
		},
		{
			name: 'shrt',
			value: this.state.shrt,
			changed: this.handleInputChange,
			placeholder: '🌐 Custom alias (optional)'
		}
	];
	render() {
		return (
			<Wrapper>
				<Title title='Shrtr'>The independent shortener</Title>
				<Status>{this.getStatus()}</Status>
				<Form
					submited={this.shorten}
					locked={this.state.loading}
					submitText='Shorten 🔗'
					textInputList={this.getTextInputList()}
				/>
			</Wrapper>
		);
	}
}

export default Shrtr;
