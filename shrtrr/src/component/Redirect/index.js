import React from 'react';
import Constants from '../../constants';
import Router from '../../container/Router'

const Redirect = (props) => (
    <span>
        {Router.navigateTo(`${Constants.server}/${props.match.params.id}`)}`
    </span>
);

export default Redirect;