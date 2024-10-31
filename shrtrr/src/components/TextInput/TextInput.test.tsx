import { createRoot } from 'react-dom/client';
import TextInput from './index';

it('renders TextInput without crashing', () => {
	const div = document.createElement('div');
	createRoot(div!).render(<TextInput />);
});
