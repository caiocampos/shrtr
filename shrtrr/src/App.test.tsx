import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';

it('renders App without crashing', () => {
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<App />
		</StrictMode>
	);
});
