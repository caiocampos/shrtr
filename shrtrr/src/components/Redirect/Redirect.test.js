import React from 'react';
import ReactDOM from 'react-dom';
import Redirect from './index';

it('renders Redirect without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Redirect />, div);
});
