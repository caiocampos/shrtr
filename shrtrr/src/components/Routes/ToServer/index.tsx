import { useParams } from 'react-router';
import Constants from '../../../constants';

const ToServer = () => {
	const params = useParams();
	(window as Window).location = `${Constants.server}/@/${params.id ?? ''}`;
	return <></>;
};

export default ToServer;
