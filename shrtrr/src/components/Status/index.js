import React from 'react';
import classes from './Status.module.scss';

const Status = props => (
	<h4 className={classes.Status}>
		<span className={props.className}>{props.children}</span>
	</h4>
);

export default React.memo(Status);
