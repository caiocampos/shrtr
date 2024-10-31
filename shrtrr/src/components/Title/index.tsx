import React from 'react';
import classes from './Title.module.scss';

interface TitleProps {
	className?: string;
	title?: string;
	children?: React.ReactNode;
}

const Title = ({ className, title, children }: TitleProps): React.JSX.Element => (
	<div className={classes.Title}>
		<span className={className}>
			<h1>{title}</h1>
			<h3>{children}</h3>
		</span>
	</div>
);

export default React.memo(Title);
