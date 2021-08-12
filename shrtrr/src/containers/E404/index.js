import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Wrapper from '../../components/Wrapper';
import { baseRoute } from '../../util';

const E404 = () => {
	const [counter, setCounter] = useState(5);
	const [redirect, setRedirect] = useState(null);
	useEffect(() => {
		if (!counter) {
			setRedirect(<Redirect to={baseRoute} />);
		} else {
			setTimeout(() => setCounter(counter - 1), 1000);
		}
	}, [counter, redirect]);
	return (
		<Wrapper>
			<h1>404</h1>
			<h3>File not found</h3>
			<h4>You will be redirected in {counter} seconds</h4>
			{redirect}
		</Wrapper>
	);
};

export default E404;
