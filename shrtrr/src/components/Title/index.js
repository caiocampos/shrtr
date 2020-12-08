import React from 'react';
import classes from './Title.module.scss';

const Title = ({ className, title, children }) => (
	<div className={classes.Title}>
		<span className={className}>
			<h1>{title}</h1>
			<h3>{children}</h3>
		</span>
	</div>
);

export default React.memo(Title);
