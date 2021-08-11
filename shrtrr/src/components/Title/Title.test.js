import React from 'react';
import ReactDOM from 'react-dom';
import Title from './index';

it('renders Title without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Title />, div);
});
