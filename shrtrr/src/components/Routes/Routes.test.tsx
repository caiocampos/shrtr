import { act } from 'react';
import { MemoryRouter } from 'react-router';
import Routes from './index';
import { createRoot } from 'react-dom/client';

let container: HTMLDivElement | null = null;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	if (container) {
		document.body.removeChild(container);
		container = null;
	}
});

it('renders Router on Main without crashing', () => {
	const router = (
		<MemoryRouter initialEntries={['/']}>
			<Routes />
		</MemoryRouter>
	);
	act(() => {
		createRoot(container!).render(router);
	});
});

it('renders Router on E404 without crashing', () => {
	const router = (
		<MemoryRouter initialEntries={['/err/error']}>
			<Routes />
		</MemoryRouter>
	);
	act(() => {
		createRoot(container!).render(router);
	});
});
