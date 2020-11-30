class LinkRepository {
	constructor(repo) {
		this.col = 'link';
		this.repository = repo;
	}

	count = (query, success, error) => {
		this.repository.count(this.col, query, success, error);
	};

	countAll = (success, error) => {
		this.repository.count(this.col, {}, success, error);
	};

	find = (query, success, error) => {
		this.repository.find(this.col, query, success, error);
	};

	findAll = (success, error) => {
		this.repository.find(this.col, {}, success, error);
	};

	insert = (obj, success, error) => {
		this.repository.insert(this.col, obj, success, error);
	};

	remove = (obj, success, error) => {
		this.repository.remove(this.col, obj, success, error);
	};

	update = (obj, success, error) => {
		const upd = {
			_id: obj._id,
			update: {
				shrt: obj.shrt,
				link: obj.link
			}
		};
		this.repository.update(this.col, upd, success, error);
	};
}

export default LinkRepository;
