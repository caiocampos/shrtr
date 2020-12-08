const Service = require('./service');
const LinkController = require('./controller/link-controller');

class Controller {
	static init = () => {
		const serv = new Service();
		return {
			link: new LinkController(serv.link)
		};
	};
}

module.exports = Controller;
