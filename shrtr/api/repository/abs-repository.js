const {ObjectID, Db} = require('tingodb')();

class AbsRepository {
	constructor() {
		this.db = new Db('./db', {});
	}
	find(collection, query, success, error) {
		const col = this.db.collection(collection);
		col.find(query).toArray((err, result) => {
			if (!err) {
				success(result);
			} else {
				error(err);
			}
		});
	}
	insert(collection, obj, success, error) {
		const col = this.db.collection(collection);
		col.insert(obj, (err, result) => {
			if (!err) {
				success(result);
			} else {
				error(err);
			}
		});
	}
	remove(collection, obj, success, error) {
		const col = this.db.collection(collection);
		col.remove(
			{ _id: new ObjectID(obj._id) },
			(err, result) => {
				if (!err) {
					success(result);
				} else {
					error(err);
				}
			});
	}
	update(collection, obj, success, error) {
		const col = this.db.collection(collection);
		col.update(
			{ _id: new ObjectID(obj._id) },
			{ $set: obj.update },
			(err, result) => {
				if (!err) {
					success(result);
				} else {
					error(err);
				}
			});
	}
}
module.exports = AbsRepository;