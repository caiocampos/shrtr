import { MongoClient, ObjectId } from 'mongodb';

const newId = (id) => new ObjectId(id);

const getDb = () => process.env.MONGO_DB;
const getDbUri = () => process.env.MONGO_URI;

const getCollection = (client, collection) => client.db(getDb()).collection(collection);

class AbsRepository {
	constructor() {
		this.init();
	}

	init = async () => {
		const client = new MongoClient(getDbUri(), { useNewUrlParser: true, useUnifiedTopology: true });
		await client.connect().catch(console.error);
		this.client = client;
	};

	count = (collection, query, success, error) => {
		try {
			const col = getCollection(this.client, collection);
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
			const col = getCollection(this.client, collection);
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
			const col = getCollection(this.client, collection);
			col.insertOne(obj, (err, result) => {
				if (!err) {
					success({ ...obj, _id: result.insertedId });
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
			const col = getCollection(this.client, collection);
			col.deleteOne({ _id: newId(obj._id) }, (err, result) => {
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
			const col = getCollection(this.client, collection);
			col.updateOne({ _id: newId(obj._id) }, { $set: obj.update }, (err, result) => {
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
