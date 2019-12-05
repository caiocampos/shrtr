import React from 'react';
import classes from './Wrapper.module.scss';

const Wrapper = props => (
	<div className={classes.Wrapper}>
		<span className={props.className}>{props.children}</span>
	</div>
);

export default Wrapper;
