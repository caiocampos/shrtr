import { MongoClient, ObjectId } from 'mongodb';

const newId = (id) => new ObjectId(id);

const getDb = () => process.env.MONGO_DB;
const getDbUri = () => process.env.MONGO_URI;

const getCollection = (client, collection) => client.db(getDb()).collection(collection);

class AbsRepository {
	constructor() {
		const client = new MongoClient(getDbUri(), { useNewUrlParser: true, useUnifiedTopology: true });
		const connectionPromise = client.connect().catch(console.error);
		this.getConnectedClient = () => connectionPromise;
	}

	count = (collection, query, success, error) => {
		this.getConnectedClient()
			.then((client) => {
				try {
					const col = getCollection(client, collection);
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
			})
			.catch(error);
	};

	find = (collection, query, success, error) => {
		this.getConnectedClient()
			.then((client) => {
				try {
					const col = getCollection(client, collection);
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
			})
			.catch(error);
	};

	insert = (collection, obj, success, error) => {
		this.getConnectedClient()
			.then((client) => {
				try {
					const col = getCollection(client, collection);
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
			})
			.catch(error);
	};

	remove = (collection, obj, success, error) => {
		this.getConnectedClient()
			.then((client) => {
				try {
					const col = getCollection(client, collection);
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
			})
			.catch(error);
	};

	update = (collection, obj, success, error) => {
		this.getConnectedClient()
			.then((client) => {
				try {
					const col = getCollection(client, collection);
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
			})
			.catch(error);
	};
}

export default AbsRepository;
