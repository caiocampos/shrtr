import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { errorRoute } from '../../util';
import ToServer from './ToServer';

const loading = <div>Loading...</div>;

const lazyLoad = (importFunction) => {
	const Lazy = React.lazy(importFunction);
	return () => (
		<Suspense fallback={loading}>
			<Lazy />
		</Suspense>
	);
};

const Main = lazyLoad(() => import('../Main'));
const E404 = lazyLoad(() => import('../../containers/E404'));

const AppRoutes = () => (
	<Routes>
		<Route index element={<Main />} />
		<Route path={errorRoute} element={<E404 />} />
		<Route path="/:id" element={<ToServer />} />
		<Route path="*" element={<E404 />} />
	</Routes>
);

export default AppRoutes;
