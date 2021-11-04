import React from 'react';
import { useParams } from 'react-router';
import Constants from '../../../constants';

const ToServer = () => {
	let params = useParams();
	window.location = `${Constants.server}/${params.id || ''}`;
	return <></>;
};

export default ToServer;
