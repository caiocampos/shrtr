module.exports = {
	init: (express, cors) => {
		const router = express.Router();
		const controller = require('./controller').init();
		const linkController = controller.link;

		router.options('/', cors);
		router.get('/@', linkController.findAll.bind(linkController));
		router.get('/@/count', linkController.countAll.bind(linkController));
		router.post('/', linkController.generate.bind(linkController));
		router.get('/:shrt', linkController.find.bind(linkController));
		router.get('/', linkController.get.bind(linkController));

		return router;
	}
};
