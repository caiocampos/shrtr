import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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

const route = (path) => `${process.env.PUBLIC_URL}${path}`;

const root = route('/');
const error = route('/err/error');

const Routes = () => (
	<Switch>
		<Route path={root} exact render={main} />
		<Route path={error} exact render={e404} />
		<Route path={route('/:id')} exact component={ToServer} />
		<Redirect from={root} to={error} />
	</Switch>
);

export default Routes;
