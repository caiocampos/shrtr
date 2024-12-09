import { act } from 'react';
import { fireEvent } from '@testing-library/react';
import Shrtr from './index';
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

it('renders Shrtr without crashing', () => {
	act(() => {
		createRoot(container!).render(<Shrtr />);
	});
});

it('renders Shrtr and submit without link', () => {
	act(() => {
		createRoot(container!).render(<Shrtr />);
	});
	const form = container?.querySelector('form');
	if (form) {
		act(() => {
			fireEvent.submit(form);
		});
	}
});

it('renders Shrtr and submit with link and shrt', () => {
	act(() => {
		createRoot(container!).render(<Shrtr />);
	});
	const form = container?.querySelector('form');
	if (form) {
		const linkInput = form.querySelector<HTMLInputElement>('input[type="text"][name="link"]');
		const shrtInput = form.querySelector<HTMLInputElement>('input[type="text"][name="shrt"]');
		if (linkInput && shrtInput) {
			act(() => {
				linkInput.value = 'test.com';
				fireEvent.change(linkInput);
				shrtInput.value = 'test';
				fireEvent.change(shrtInput);
			});
			expect(linkInput.value).toBe('test.com');
			expect(shrtInput.value).toBe('test');
			act(() => {
				fireEvent.submit(form);
			});
		}
	}
});
