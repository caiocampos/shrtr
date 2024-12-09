import { JSX, memo, ReactNode } from 'react';
import classes from './Status.module.scss';

interface StatusProps {
	className?: string;
	children?: ReactNode;
}

const Status = ({ className, children }: StatusProps): JSX.Element => (
	<h4 className={classes.Status}>
		<span className={className}>{children}</span>
	</h4>
);

export default memo(Status);
