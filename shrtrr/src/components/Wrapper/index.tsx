import React from 'react';
import classes from './Wrapper.module.scss';

interface WrapperProps {
	className?: string;
	children?: React.ReactNode;
}

const Wrapper = ({ className, children }: WrapperProps): React.JSX.Element => (
	<div className={classes.Wrapper}>
		<span className={className}>{children}</span>
	</div>
);

export default Wrapper;
