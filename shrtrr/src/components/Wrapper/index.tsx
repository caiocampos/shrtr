import { JSX, ReactNode } from 'react';
import classes from './Wrapper.module.scss';

interface WrapperProps {
	className?: string;
	children?: ReactNode;
}

const Wrapper = ({ className, children }: WrapperProps): JSX.Element => (
	<div className={classes.Wrapper}>
		<span className={className}>{children}</span>
	</div>
);

export default Wrapper;
