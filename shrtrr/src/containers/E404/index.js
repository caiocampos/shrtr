import React, { useState, useEffect } from 'react';
import Constants from '../../constants';
import { navigateTo } from '../../components/Router';
import Wrapper from '../../components/Wrapper';

const E404 = props => {
	const [counter, setCounter] = useState(5);
	useEffect(() => {
		if (!counter) {
			navigateTo(Constants.self);
		} else {
			setTimeout(() => setCounter(counter - 1), 1000);
		}
	}, [counter]);
	return (
		<Wrapper>
			<h1>404</h1>
			<h3>File not found</h3>
			<h4>You will be redirected in {counter} seconds</h4>
		</Wrapper>
	);
};

export default E404;
