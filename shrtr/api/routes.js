import Express from 'express';
import Controller from './controller.js';

export default {
	init: (cors) => {
		const router = Express.Router();
		const controller = Controller.init();
		const linkController = controller.link;

		router.options('/', cors);
		router.get('/@', linkController.findAll);
		router.get('/@/count', linkController.countAll);
		router.post('/', linkController.generate);
		router.get('/:shrt', linkController.find);
		router.get('/', linkController.get);

		return router;
	}
};
