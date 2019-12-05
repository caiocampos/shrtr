class LinkService {
	constructor(repo, msg) {
		this.repository = repo;
		this.msg = msg;
	}
	find(query, success, error) {
		this.repository.find(query, success, error);
	}
	findAll(success, error) {
		this.repository.findAll(success, error);
	}
	insert(obj, success, error) {
		if (!obj || !Object.entries(obj).length) {
			error(this.msg.emptyRequest);
			return;
		}
		this.repository.insert(obj, success, error);
	}
	remove(obj, success, error) {
		if (!obj || !Object.entries(obj).length) {
			error(this.msg.emptyRequest);
			return;
		}
		this.repository.remove(obj, success, error);
	}
	update(obj, success, error) {
		if (!obj || !Object.entries(obj).length) {
			error(this.msg.emptyRequest);
			return;
		}
		this.repository.update(obj, success, error);
	}
	generate(obj, success, error, recursion) {
		if (!obj || !obj.link) {
			error(this.msg.emptyRequest);
			return;
		}
		const regenerate = (() => {
			obj.shrt = (Math.random() * 9323572139681727)
				.toString(36)
				.replace('.', 'A');
			this.generate(obj, success, error, true);
		}).bind(this);
		if (obj.shrt) {
			this.find(
				{ shrt: obj.shrt },
				data => {
					if (data.length) {
						if (recursion) {
							regenerate();
							return;
						}
						error({
							message: 'The alias already exists, try another'
						});
						return;
					}
					this.insert(obj, success, error);
				},
				err => console.log(err)
			);
		} else {
			regenerate();
		}
	}
}
module.exports = LinkService;
