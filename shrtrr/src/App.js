import React from 'react';
import Routes from './components/Routes';
import { BrowserRouter } from 'react-router-dom';

console.log(process.env.PUBLIC_URL);
const App = () => (
	<BrowserRouter basemname={`/${process.env.PUBLIC_URL}`}>
		<Routes />
	</BrowserRouter>
);

export default App;
