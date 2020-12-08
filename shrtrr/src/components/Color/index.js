import React, { Fragment } from 'react';
import classes from './Color.module.scss';

const maxColorNum = 1 << 24;

const newColor = () => {
	const randomColor = `#${((maxColorNum * Math.random()) | 0).toString(16)}`;
	document.documentElement.style.setProperty('--main-bg-color', randomColor);
};

const Color = () => (
	<Fragment>
		{newColor()}
		<input className={classes.Color} type="button" value="New Color 🎨" onClick={newColor} />
	</Fragment>
);

export default React.memo(Color);
