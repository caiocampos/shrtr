import { ComponentType, JSX, lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { errorRoute } from '@/util';
import ToServer from './ToServer';

const loading = <div>Loading...</div>;

const lazyLoad = (importFunction: () => Promise<{ default: ComponentType }>) => {
	const Lazy = lazy(importFunction);
	return () => (
		<Suspense fallback={loading}>
			<Lazy />
		</Suspense>
	);
};

const Main = lazyLoad(() => import('../Main'));
const E404 = lazyLoad(() => import('../../containers/E404'));

const router = createBrowserRouter(
	[
		{
			index: true,
			element: <Main />
		},
		{
			path: errorRoute,
			element: <E404 />
		},
		{
			path: '/:id',
			element: <ToServer />
		},
		{
			path: '*',
			element: <E404 />
		}
	],
	{ basename: import.meta.env.BASE_URL ?? '' }
);

const AppRoutes = (): JSX.Element => <RouterProvider router={router} />;

export default AppRoutes;
