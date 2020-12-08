const Express = require('express');
const BodyParser = require('body-parser');
const Cors = require('cors');
const Routes = require('./routes');

appInit = () => {
	const cors = Cors();
	const exp = Express();
	const routes = Routes.init(cors);

	exp.use(cors);
	exp.use(BodyParser.json());
	exp.use(BodyParser.urlencoded({ extended: true }));

	exp.use(Express.static('public'));

	exp.use(routes);

	return exp;
};

const app = appInit();

module.exports = app;
