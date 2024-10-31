import { createRoot } from 'react-dom/client';
import Status from './index';

it('renders Status without crashing', () => {
	const div = document.createElement('div');
	createRoot(div!).render(<Status />);
});
