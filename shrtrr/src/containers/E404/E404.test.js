import React from 'react';
import ReactDOM from 'react-dom';
import E404 from './index';

it('renders E404 without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<E404 />, div);
});
