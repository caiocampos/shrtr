import { createRoot } from 'react-dom/client';
import Color from './index';

it('renders Color without crashing', () => {
	const div = document.createElement('div');
	createRoot(div!).render(<Color />);
});
