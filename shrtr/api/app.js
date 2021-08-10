import Express from 'express';
import Cors from 'cors';
import dotenv from 'dotenv';
import Routes from './routes.js';

const app = {
	config: () => {
		dotenv.config();
		const cors = Cors();
		const exp = Express();
		const routes = Routes.init(cors);

		exp.use(cors);
		exp.use(Express.urlencoded({ extended: true }));
		exp.use(Express.json());

		exp.use(Express.static('public'));

		exp.use(routes);

		return exp;
	}
};

export default app;
