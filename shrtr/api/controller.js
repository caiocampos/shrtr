import Service from './service.js';
import LinkController from './controller/link-controller.js';

export default {
	init: () => {
		const serv = new Service();
		return {
			link: new LinkController(serv.link)
		};
	}
};
