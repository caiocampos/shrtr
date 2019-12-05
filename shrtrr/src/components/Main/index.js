import React from 'react';
import classes from './Main.module.scss';
import Shrtr from '../../containers/Shrtr';
import Color from '../Color';

const Main = props => (
	<div className={classes.Main}>
		<Color />
		<Shrtr />
	</div>
);

export default Main;
