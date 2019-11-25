const app = (() => {
	const express = require('express');
	const parser = require('body-parser');
	const cors = require('cors')();

	const exp = express();

	exp.use(cors);
	exp.use(parser.json());
	exp.use(parser.urlencoded({ extended: true }));

	exp.use(express.static('public'));

	require('./api/controller').init(exp, cors);
	return exp;
})();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
