import React from 'react';
import classes from './Status.module.scss';

const Status = ({ className, children }) => (
	<h4 className={classes.Status}>
		<span className={className}>{children}</span>
	</h4>
);

export default React.memo(Status);
