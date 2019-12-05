import React from 'react';
import Constants from '../../constants';
import { navigateTo } from '../Router';

const Redirect = props => (
	<>
		{navigateTo(
			`${Constants.server}/${
				props.match && props.match.params && props.match.params.id
					? props.match.params.id
					: ''
			}`
		)}
	</>
);

export default Redirect;
