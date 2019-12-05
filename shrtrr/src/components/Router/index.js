import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Redirect from '../Redirect';
import Main from '../Main';
import E404 from '../../containers/E404';

const Router = props => (
	<BrowserRouter>
		<Switch>
			<Route path='/' exact={true} component={Main} />
			<Route path='/err/error' component={E404} />
			<Route path='/:id' component={Redirect} />
		</Switch>
	</BrowserRouter>
);

export const navigateTo = location => {
	window.location = location;
};

export default Router;
