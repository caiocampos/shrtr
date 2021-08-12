import React from 'react';
import Routes from './components/Routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<Routes />
	</BrowserRouter>
);

export default App;
