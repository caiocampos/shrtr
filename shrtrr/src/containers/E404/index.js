import React, { useState, useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Wrapper from '../../components/Wrapper';

const E404 = () => {
	const [ counter, setCounter ] = useState(5);
	const [ route, setRoute ] = useState(<Fragment />);
	useEffect(
		() => {
			if (!counter) {
				setRoute(<Redirect to="/" />);
			} else {
				setTimeout(() => setCounter(counter - 1), 1000);
			}
		},
		[ counter, route ]
	);
	return (
		<Wrapper>
			<h1>404</h1>
			<h3>File not found</h3>
			<h4>You will be redirected in {counter} seconds</h4>
			{route}
		</Wrapper>
	);
};

export default E404;
