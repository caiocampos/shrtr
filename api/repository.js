class Repository {
	constructor() {
		const AbsRepository = require('./repository/abs-repository');
		const LinkRepository = require('./repository/link-repository');

		const absRepository = new AbsRepository();

		this.link = new LinkRepository(absRepository);
	}
}
module.exports = Repository;