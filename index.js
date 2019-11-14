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

const publicRoot = '/home/runner/public';

app.get('/', (req, res) => {
	res.sendFile(`${publicRoot}/index.html`);
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
		let link = data[0].link;
		link = (/https?:\/\//).test(link) ? link : `http://${link}`;
		res.redirect(link);
	}, err => {
		console.log(err);
		res.sendFile(`${publicRoot}/404.html`);
	});
});

app.listen(3000, () => console.log('server started'));
