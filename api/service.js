class Service {
	constructor() {
		const Repository = require('./repository');
		const LinkService = require('./service/link-service');

		const repo = new Repository();

		const msg = {};
		msg.emptyRequest = { message: 'Empty request body' };

		this.link = new LinkService(repo.link, msg);
	}
}
module.exports = Service;