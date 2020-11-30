import tingodb from 'tingodb';

const { ObjectID, Db } = tingodb();

class AbsRepository {
	constructor() {
		this.db = new Db('./db', {});
	}

	count = (collection, query, success, error) => {
		try {
			const col = this.db.collection(collection);
			col.count(query, (err, result) => {
				if (!err) {
					success(result);
				} else {
					error(err);
				}
			});
		} catch (err) {
			error(err);
		}
	};

	find = (collection, query, success, error) => {
		try {
			const col = this.db.collection(collection);
			col.find(query).toArray((err, result) => {
				if (!err) {
					success(result);
				} else {
					error(err);
				}
			});
		} catch (err) {
			error(err);
		}
	};

	insert = (collection, obj, success, error) => {
		try {
			const col = this.db.collection(collection);
			col.insert(obj, (err, result) => {
				if (!err) {
					success(result);
				} else {
					error(err);
				}
			});
		} catch (err) {
			error(err);
		}
	};

	remove = (collection, obj, success, error) => {
		try {
			const col = this.db.collection(collection);
			col.remove({ _id: new ObjectID(obj._id) }, (err, result) => {
				if (!err) {
					success(result);
				} else {
					error(err);
				}
			});
		} catch (err) {
			error(err);
		}
	};

	update = (collection, obj, success, error) => {
		try {
			const col = this.db.collection(collection);
			col.update({ _id: new ObjectID(obj._id) }, { $set: obj.update }, (err, result) => {
				if (!err) {
					success(result);
				} else {
					error(err);
				}
			});
		} catch (err) {
			error(err);
		}
	};
}

export default AbsRepository;
