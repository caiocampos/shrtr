import React from 'react';
import classes from './Title.module.scss';

const Title = props => (
	<div className={classes.Title}>
		<span className={props.className}>
			<h1>{props.title}</h1>
			<h3>{props.children}</h3>
		</span>
	</div>
);

export default React.memo(Title);
