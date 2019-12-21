import React from 'react';

const ShortenResponse = props => {
	if (props.error) {
		return (
			<span>
				Error trying to generate link.
				<br />
				{props.error}
			</span>
		);
	}
	if (props.route) {
		return (
			<span>
				Generated at{' '}
				<a href={`${process.env.PUBLIC_URL}/${props.route}`}>
					/{props.route}
				</a>
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
