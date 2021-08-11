import React from 'react';
import ReactDOM from 'react-dom';
import Form from './index';

it('renders Form without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Form />, div);
});
