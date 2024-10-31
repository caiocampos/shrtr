import { createRoot } from 'react-dom/client';
import ShortenResponse, { ShortenResponseObject } from './index';

it('renders ShortenResponse without crashing', () => {
	const div = document.createElement('div');
	createRoot(div!).render(<ShortenResponse route="" />);
});

it('renders ShortenResponseObject without crashing', () => {
	const obj = new ShortenResponseObject('');
	const div = document.createElement('div');
	createRoot(div!).render(obj.generate());
});

it('build ShortenResponseObject with error param', () => {
	const div = document.createElement('div');
	createRoot(div!).render(ShortenResponseObject.build(null, 'error'));
});

it('build ShortenResponseObject with route param', () => {
	const div = document.createElement('div');
	createRoot(div!).render(ShortenResponseObject.build('to'));
});

it('build ShortenResponseObject with route and error param', () => {
	const div = document.createElement('div');
	createRoot(div!).render(ShortenResponseObject.build('to', 'error'));
});
