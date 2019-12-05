import React from 'react';
import ReactDOM from 'react-dom';
import Shrtr from './index';

it('renders Shrtr without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Shrtr />, div);
});
