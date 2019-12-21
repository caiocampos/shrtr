import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Route } from 'react-router';
import E404 from './index';

jest.useFakeTimers();

it('renders E404 without crashing', () => {
	const div = document.createElement('div');
	const e404 = (
		<MemoryRouter initialEntries={['/e404']}>
			<Route path={'/'} exact render={() => <div></div>} />
			<Route path={'/e404'} exact component={E404} />
		</MemoryRouter>
	);
	act(() => {
		ReactDOM.render(e404, div);
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
