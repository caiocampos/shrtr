import Express from 'express';
import BodyParser from 'body-parser';
import Cors from 'cors';
import Routes from './routes.js';

const app = (() => {
	const cors = Cors();
	const exp = Express();
	const routes = Routes.init(cors);

	exp.use(cors);
	exp.use(BodyParser.json());
	exp.use(BodyParser.urlencoded({ extended: true }));

	exp.use(Express.static('public'));

	exp.use(routes);

	return exp;
})();

export default app;
