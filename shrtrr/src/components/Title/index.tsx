import { JSX, memo, ReactNode } from 'react';
import classes from './Title.module.scss';

interface TitleProps {
	className?: string;
	title?: string;
	children?: ReactNode;
}

const Title = ({ className, title, children }: TitleProps): JSX.Element => (
	<div className={classes.Title}>
		<span className={className}>
			<h1>{title}</h1>
			<h3>{children}</h3>
		</span>
	</div>
);

export default memo(Title);
