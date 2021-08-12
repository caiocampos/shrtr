import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { baseRoute, errorRoute } from '../../util';
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

const main = lazyLoad(() => import('../Main'));
const e404 = lazyLoad(() => import('../../containers/E404'));

const Routes = () => (
	<Switch>
		<Route path={baseRoute} exact render={main} />
		<Route path={errorRoute} exact render={e404} />
		<Route path={'/:id'} component={ToServer} />
		<Redirect from={baseRoute} to={errorRoute} />
	</Switch>
);

export default Routes;
