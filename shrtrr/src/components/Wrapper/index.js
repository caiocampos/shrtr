import React from 'react';
import classes from './Wrapper.module.scss';

const Wrapper = ({ className, children }) => (
	<div className={classes.Wrapper}>
		<span className={className}>{children}</span>
	</div>
);

export default Wrapper;
