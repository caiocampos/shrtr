import React, { PureComponent } from 'react';
import Wrapper from '../../components/Wrapper';
import Status from '../../components/Status';
import Title from '../../components/Title';
import Form from '../../components/Form';
import Service from '../../services/shrtr.service';

const defaultMessage = 'Please enter a link to shorten';
const waitingCalculations = 'Waiting for server calculations...';

class Shrtr extends PureComponent {
	state = {
		link: '',
		shrt: '',
		response: defaultMessage,
		loading: false,
		countResponse: waitingCalculations
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

	setLoading = (loading = true) => this.setState({ loading });

	setCountResponse = (countResponse) => this.setState({ countResponse });

	setResponse = (response = defaultMessage) => this.setState({ response });

	callCount = () =>
		Service.count()
			.then((count) => this.setCountResponse(`There are ${count} shortened links!`))
			.catch((error) => console.log(error) || this.setCountResponse('An error has occurred!'));

	handleInputChange = (event) => {
		event.preventDefault();
		const { name, type, checked, value } = event.target;
		this.setState({
			[name]: type === 'checkbox' ? checked : value
		});
	};

	shorten = (event) => {
		event.preventDefault();
		const { link, shrt } = this.state;
		if (!link) {
			this.setResponse();
			return;
		}
		this.setLoading();
		this.setCountResponse(waitingCalculations);
		Service.shorten(link, shrt).then((res) => {
			this.setResponse(res);
			this.setLoading(false);
			this.callCount();
		});
	};

	componentDidMount() {
		this.callCount();
	}

	render() {
		return (
			<Wrapper>
				<Title title="Shrtr">The independent shortener</Title>
				<Status>{this.state.countResponse}</Status>
				<Status>{this.getStatus()}</Status>
				<Form
					submited={this.shorten}
					locked={this.state.loading}
					submitText="Shorten 🔗"
					textInputList={this.getTextInputList()}
				/>
			</Wrapper>
		);
	}
}

export default Shrtr;
