import { createRoot } from 'react-dom/client';
import Wrapper from './index';

it('renders Wrapper without crashing', () => {
	const div = document.createElement('div');
	createRoot(div!).render(<Wrapper />);
});
