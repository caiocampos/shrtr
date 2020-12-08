import React, { Fragment } from 'react';
import Constants from '../../../constants';

function redirect(match) {
	const path = match && match.params && match.params.id ? match.params.id : '';
	window.location = `${Constants.server}/${path}`;
}

const ToServer = ({ match }) => <Fragment>{redirect(match)}</Fragment>;

export default ToServer;
