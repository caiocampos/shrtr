import React from 'react';
import Routes from './components/Routes';
import { BrowserRouter } from 'react-router-dom';

const App = props => (
	<BrowserRouter>
		<Routes />
	</BrowserRouter>
);

export default App;
