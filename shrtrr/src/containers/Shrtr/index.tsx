import { ChangeEvent, FormEvent, JSX, PureComponent, ReactNode } from 'react';
import Wrapper from '@/components/Wrapper';
import Status from '@/components/Status';
import Title from '@/components/Title';
import Form from '@/components/Form';
import Service from '@/services/shrtr.service';
import { TextInputProps } from '@/components/TextInput';

const defaultMessage = 'Please enter a link to shorten';
const waitingCalculations = 'Waiting for server calculations...';

interface ShrtrState {
	link: string;
	shrt: string;
	response: ReactNode;
	loading: boolean;
	countResponse: ReactNode;
}

class Shrtr extends PureComponent {
	state: ShrtrState = {
		link: '',
		shrt: '',
		response: defaultMessage,
		loading: false,
		countResponse: waitingCalculations
	};

	getStatus = (): ReactNode => (this.state.loading ? 'Loading...' : this.state.response);

	getTextInputList = (): TextInputProps[] => [
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

	setLoading = (loading = true): void => this.setState({ loading });

	setCountResponse = (countResponse: ReactNode): void => this.setState({ countResponse });

	setResponse = (response: ReactNode = defaultMessage): void => this.setState({ response });

	callCount = (): Promise<void> =>
		Service.count()
			.then((count) => this.setCountResponse(`There are ${count} shortened links!`))
			.catch((error) => {
				console.error(error);
				this.setCountResponse('An error has occurred!');
			});

	handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
		event.preventDefault();
		const { name, type, checked, value } = event.target;
		this.setState({
			[name]: type === 'checkbox' ? checked : value
		});
	};

	shorten = (event: FormEvent<HTMLFormElement>): void => {
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

	componentDidMount(): void {
		this.callCount();
	}

	render(): JSX.Element {
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
