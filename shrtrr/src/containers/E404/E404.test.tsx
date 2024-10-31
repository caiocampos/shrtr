import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter, Route } from 'react-router';
import E404 from './index';

jest.useFakeTimers();

it('renders E404 without crashing', () => {
	const div = document.createElement('div');
	const e404 = (
		<MemoryRouter initialEntries={['/e404']}>
			<Route path={'/'} element={<div></div>} />
			<Route path={'/e404'} element={<E404 />} />
		</MemoryRouter>
	);
	act(() => {
		createRoot(div!).render(e404);
	});
	act(() => {
		jest.advanceTimersByTime(1000);
	});
	act(() => {
		jest.advanceTimersByTime(3000);
	});
	act(() => {
		jest.advanceTimersByTime(1000);
	});
});
