import React from 'react';
import classes from './Status.module.scss';

interface StatusProps {
	className?: string;
	children?: React.ReactNode;
}

const Status = ({ className, children }: StatusProps): React.JSX.Element => (
	<h4 className={classes.Status}>
		<span className={className}>{children}</span>
	</h4>
);

export default React.memo(Status);
