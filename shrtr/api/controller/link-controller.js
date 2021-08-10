import Constants from '../constants.js';

class LinkController {
	constructor(service) {
		this.service = service;
	}

	get = (req, res) => {
		if (process.env.NODE_ENV === 'local') {
			res.sendFile('index.html', { root: './static' });
		} else {
			res.redirect(Constants.shrtrr);
		}
	};

	countAll = (req, res) => {
		this.service.countAll(
			(data) => {
				res.json(data);
			},
			(err) => {
				console.log(err);
				res.status(400).json(err);
			}
		);
	};

	find = (req, res) => {
		if (req.params.shrt.includes('.')) {
			res.sendFile(req.params.shrt, { root: './static' });
			return;
		}
		this.service.find(
			{ shrt: req.params.shrt },
			(data) => {
				if (!data.length) {
					throw 'Nothing returned';
				}
				let link = data[0].link;
				link = /https?:\/\//.test(link) ? link : `http://${link}`;
				res.redirect(link);
			},
			(err) => {
				console.log(err);
				res.redirect(`${Constants.shrtrr}/err/error`);
			}
		);
	};

	findAll = (req, res) => {
		this.service.findAll(
			(data) => {
				res.json(data);
			},
			(err) => {
				console.log(err);
				res.status(400).json(err);
			}
		);
	};

	generate = (req, res) => {
		this.service.generate(
			req.body,
			(data) => {
				res.json(data);
			},
			(err) => {
				console.log(err);
				res.status(400).json(err);
			}
		);
	};
}

export default LinkController;
