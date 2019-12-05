import React from 'react';

const ShrtrServiceResponse = props => {
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
				Generated at <a href={`/${props.route}`}>/{props.route}</a>
			</span>
		);
	}
	return null;
};

export class ShrtrServiceResponseObject {
	constructor(route, error) {
		this.error = error;
		this.route = route;
	}

	generate = () => ShrtrServiceResponseObject.build(this.route, this.error);

	static build(route, error) {
		return <ShrtrServiceResponse error={error} route={route} />;
	}
}

export default ShrtrServiceResponse;
