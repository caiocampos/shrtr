import AbsRepository from './repository/abs-repository.js';
import LinkRepository from './repository/link-repository.js';

class Repository {
	constructor() {
		const absRepository = new AbsRepository();
		this.link = new LinkRepository(absRepository);
	}
}

export default Repository;
