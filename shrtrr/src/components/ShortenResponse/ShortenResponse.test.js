import React from 'react';
import ReactDOM from 'react-dom';
import ShortenResponse, { ShortenResponseObject } from './index';

it('renders ShortenResponse without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ShortenResponse />, div);
});

it('renders ShortenResponseObject without crashing', () => {
	const obj = new ShortenResponseObject();
	const div = document.createElement('div');
	ReactDOM.render(obj.generate(), div);
});

it('build ShortenResponseObject with error param', () => {
	const div = document.createElement('div');
	ReactDOM.render(ShortenResponseObject.build(null, 'error'), div);
});

it('build ShortenResponseObject with route param', () => {
	const div = document.createElement('div');
	ReactDOM.render(ShortenResponseObject.build('to'), div);
});

it('build ShortenResponseObject with route and error param', () => {
	const div = document.createElement('div');
	ReactDOM.render(ShortenResponseObject.build('to', 'error'), div);
});
