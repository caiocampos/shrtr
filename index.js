const service = (() => {
	const Service = require('./api/service');
	const serv = new Service();
	return serv.link;
})();
const app = (() => {
	const express = require('express');
	const parser = require('body-parser');

	const exp = express();

	exp.use(parser.json());
	exp.use(parser.urlencoded({ extended: true }));

	exp.use(express.static('public'));
	return exp;
})();

app.get('/', (req, res) => {
	res.sendFile('public/index.html');
});
app.get('/@', (req, res) => {
	service.findAll(data => {
		res.json(data);
	}, err => {
		console.log(err);
		res.status(400).json(err);
	});
});
app.post('/', (req, res) => {
	service.generate(req.body, data => {
		res.json(data);
	}, err => {
		console.log(err);
		res.status(400).json(err);
	});
});
app.get('/:shrt', function (req, res) {
	service.find({ shrt: req.params.shrt }, data => {
		if (!data.length) {
			throw 'Nothing returned';
		}
		const link = data[0].link;
		res.redirect(link);
	}, err => {
		console.log(err);
		res.status(400).json(err);
	});
});

app.listen(3000, () => console.log('server started'));
