module.exports = {
	init(app, cors) {
		const shrtrr = 'https://shrtrr.caiocampos.repl.co';
		const publicRoot = '/home/runner/static';
		const service = (() => {
			const Service = require('./service');
			const serv = new Service();
			return serv.link;
		})();
		app.options('/', cors);
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
			if (req.params.shrt.includes('.')) {
				res.sendFile(`${publicRoot}/${req.params.shrt}`);
				return;
			}
			service.find({ shrt: req.params.shrt }, data => {
				if (!data.length) {
					throw 'Nothing returned';
				}
				let link = data[0].link;
				link = (/https?:\/\//).test(link) ? link : `http://${link}`;
				res.redirect(link);
			}, err => {
				console.log(err);
				res.redirect(`${shrtrr}/err/error`);
			});
		});
		app.get('/', (req, res) => {
			res.redirect(shrtrr);
		});
	}
}
