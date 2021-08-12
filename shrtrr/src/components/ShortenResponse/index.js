import React from 'react';
import Constants from '../../constants';

const ShortenResponse = ({ error, route }) => {
	if (error) {
		return (
			<span>
				Error trying to generate link.
				<br />
				{error}
			</span>
		);
	}
	if (route) {
		const link = `${Constants.server}/${route}`;
		return (
			<span>
				Generated at <a href={link}>{link}</a>
			</span>
		);
	}
	return null;
};

export class ShortenResponseObject {
	constructor(route, error) {
		this.error = error;
		this.route = route;
	}

	generate = () => ShortenResponseObject.build(this.route, this.error);

	static build(route, error) {
		return <ShortenResponse error={error} route={route} />;
	}
}

export default ShortenResponse;
