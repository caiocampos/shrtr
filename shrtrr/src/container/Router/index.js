
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Redirect from '../../component/Redirect';
import App from '../App';
import E404 from '../E404';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact={true} component={App} />
                    <Route path='/err/error' component={E404} />
                    <Route path='/:id' component={Redirect} />
                </Switch>
            </BrowserRouter>
        );
    }
    static navigateTo(location) {
        window.location = location;
    }
}

export default Router;