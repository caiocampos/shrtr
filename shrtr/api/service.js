import Constants from './constants.js';
import Repository from './repository.js';
import LinkService from './service/link-service.js';

class Service {
	constructor() {
		const repo = new Repository();
		this.link = new LinkService(repo.link, Constants.messages);
	}
}

export default Service;
