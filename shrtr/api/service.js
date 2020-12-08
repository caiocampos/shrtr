const Constants = require('./constants');
const Repository = require('./repository');
const LinkService = require('./service/link-service');

class Service {
	constructor() {
		const repo = new Repository();
		this.link = new LinkService(repo.link, Constants.messages);
	}
}

module.exports = Service;
