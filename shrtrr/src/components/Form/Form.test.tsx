import { createRoot } from 'react-dom/client';
import Form from './index';

it('renders Form without crashing', () => {
	const div = document.createElement('div');
	createRoot(div!).render(<Form />);
});
