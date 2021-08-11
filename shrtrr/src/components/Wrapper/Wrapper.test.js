import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './index';

it('renders Wrapper without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Wrapper />, div);
});
