module.exports = {
	init: () => {
		const Service = require('./service');
		const LinkController = require('./controller/link-controller');

		const serv = new Service();
		return {
			link: new LinkController(serv.link)
		};
	}
};
