import React from 'react';
import ReactDOM from 'react-dom';
import Color from './index';

it('renders Color without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Color />, div);
});
