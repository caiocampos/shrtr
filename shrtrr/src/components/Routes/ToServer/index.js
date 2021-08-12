import React from 'react';
import Constants from '../../../constants';

function redirect(match) {
	const path = match && match.params && match.params.id ? match.params.id : '';
	window.location = `${Constants.server}/${path}`;
}

const ToServer = ({ match }) => <>{redirect(match)}</>;

export default ToServer;
