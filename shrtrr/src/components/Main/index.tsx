import { Navigate, useLocation } from 'react-router-dom';
import classes from './Main.module.scss';
import Shrtr from '../../containers/Shrtr';
import Color from '../Color';
import { errorRoute } from '../../util';

const Main = () => {
	const location = useLocation();
	return location.search === '?error' ? (
		<Navigate to={errorRoute} />
	) : (
		<div className={classes.Main}>
			<Color />
			<Shrtr />
		</div>
	);
};

export default Main;
