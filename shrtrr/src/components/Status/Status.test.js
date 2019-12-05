import React from 'react';
import ReactDOM from 'react-dom';
import Status from './index';

it('renders Status without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Status />, div);
});
