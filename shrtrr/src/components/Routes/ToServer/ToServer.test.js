import React from 'react';
import ReactDOM from 'react-dom';
import ToServer from './index';

it('renders ToServer without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ToServer />, div);
});

it('renders ToServer with full match', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ToServer match={{ params: { id: '1232423' } }} />, div);
});

it('renders ToServer without id', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ToServer match={{ params: { id: null } }} />, div);
});

it('renders ToServer without params', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ToServer match={{ params: null }} />, div);
});
