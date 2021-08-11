import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router';
import Routes from './index';

let container;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	document.body.removeChild(container);
	container = null;
});

it('renders Router on Main without crashing', () => {
	const router = (
		<MemoryRouter initialEntries={['/']}>
			<Routes />
		</MemoryRouter>
	);
	act(() => {
		ReactDOM.render(router, container);
	});
});

it('renders Router on E404 without crashing', () => {
	const router = (
		<MemoryRouter initialEntries={['/err/error']}>
			<Routes />
		</MemoryRouter>
	);
	act(() => {
		ReactDOM.render(router, container);
	});
});
