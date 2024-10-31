import { createRoot } from 'react-dom/client';
import Title from './index';

it('renders Title without crashing', () => {
	const div = document.createElement('div');
	createRoot(div!).render(<Title />);
});
