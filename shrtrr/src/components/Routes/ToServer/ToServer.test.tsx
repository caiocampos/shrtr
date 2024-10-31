import { createRoot } from 'react-dom/client';
import ToServer from './index';

it('renders ToServer without crashing', () => {
	const div = document.createElement('div');
	createRoot(div!).render(<ToServer />);
});
