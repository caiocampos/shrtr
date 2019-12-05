const app = (() => {
	const express = require('express');
	const parser = require('body-parser');
	const cors = require('cors')();

	const exp = express();

	const routes = require('./routes').init(express, cors);

	exp.use(cors);
	exp.use(parser.json());
	exp.use(parser.urlencoded({ extended: true }));

	exp.use(express.static('public'));

	exp.use(routes);

	return exp;
})();

module.exports = app;
