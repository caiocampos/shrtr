import React from 'react';
import ReactDOM from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import Shrtr from './index';

let container;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	document.body.removeChild(container);
	container = null;
});

it('renders Shrtr without crashing', () => {
	act(() => {
		ReactDOM.render(<Shrtr />, container);
	});
});

it('renders Shrtr and submit without link', () => {
	act(() => {
		ReactDOM.render(<Shrtr />, container);
	});
	const form = container.querySelector('form');
	act(() => {
		Simulate.submit(form);
	});
});

it('renders Shrtr and submit with link and shrt', () => {
	act(() => {
		ReactDOM.render(<Shrtr />, container);
	});
	const form = container.querySelector('form');
	const linkInput = form.querySelector('input[type="text"][name="link"]');
	const shrtInput = form.querySelector('input[type="text"][name="shrt"]');
	act(() => {
		linkInput.value = 'test.com';
		Simulate.change(linkInput);
		shrtInput.value = 'test';
		Simulate.change(shrtInput);
	});
	expect(linkInput.value).toBe('test.com');
	expect(shrtInput.value).toBe('test');
	act(() => {
		Simulate.submit(form);
	});
});
