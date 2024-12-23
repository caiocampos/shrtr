import { JSX, ReactNode } from 'react';
import Constants from '../../constants';

interface IShortenResponse {
	route: string | null;
	error?: string | Error;
}

const ShortenResponse = ({ error, route }: IShortenResponse): JSX.Element => {
	if (error) {
		console.error(error);
		return (
			<span>
				Error trying to generate link.
				<br />
				{error instanceof Error ? error.message : error}
			</span>
		);
	}
	if (route) {
		const link = `${Constants.server}/@/${route}`;
		return (
			<span>
				Generated at <a href={link}>{link}</a>
			</span>
		);
	}
	return <></>;
};

export class ShortenResponseObject {
	private readonly route: string;
	private readonly error?: Error;

	constructor(route: string, error?: Error) {
		this.error = error;
		this.route = route;
	}

	generate = (): ReactNode => ShortenResponseObject.build(this.route, this.error);

	static build(route: string | null, error?: string | Error): ReactNode {
		return <ShortenResponse error={error} route={route} />;
	}
}

export default ShortenResponse;
