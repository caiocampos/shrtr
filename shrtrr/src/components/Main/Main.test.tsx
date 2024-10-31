import { createRoot } from 'react-dom/client';
import Main from './index';

it('renders Main without crashing', () => {
	const div = document.createElement('div');
	createRoot(div!).render(<Main />);
});
