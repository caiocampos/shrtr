import React, { useEffect } from 'react';
import classes from './Color.module.scss';

const maxColorNum = 0xffffff;

const newColor = () => {
	const randomColor = `#${Math.floor(maxColorNum * Math.random())
		.toString(16)
		.padStart(6, '0')}`;
	document.documentElement.style.setProperty('--main-bg-color', randomColor);
};

const Color = () => {
	useEffect(() => {
		newColor();
	}, []);
	return <input className={classes.Color} type="button" value="New Color 🎨" onClick={newColor} />;
};

export default React.memo(Color);
