import React from 'react';
import classes from './Color.module.scss';

const newColor = () => {
	const randomColor = `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;
	document.documentElement.style.setProperty('--main-bg-color', randomColor);
};

const Color = props => (
	<>
		{newColor()}
		<input
			className={classes.Color}
			type='button'
			value='New Color 🎨'
			onClick={newColor}
		/>
	</>
);

export default React.memo(Color);
