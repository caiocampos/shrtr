import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Wrapper from '@/components/Wrapper';
import { baseRoute } from '@/util';

const Error404 = (): React.JSX.Element => {
	const [counter, setCounter] = useState(5);
	useEffect(() => {
		if (counter) {
			setTimeout(() => setCounter(counter - 1), 1000);
		}
	}, [counter]);
	return (
		<Wrapper>
			<h1>404</h1>
			<h3>File not found</h3>
			<h4>You will be redirected in {counter} seconds</h4>
			{!counter ? <Navigate to={baseRoute} /> : null}
		</Wrapper>
	);
}

export default Error404;