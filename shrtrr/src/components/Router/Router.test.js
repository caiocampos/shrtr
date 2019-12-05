import React from 'react';
import ReactDOM from 'react-dom';
import Router from './index';

it('renders Router without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Router />, div);
});
