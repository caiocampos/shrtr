import { MongoClient, ObjectId } from 'mongodb';

const newId = (id) => ObjectId.createFromHexString(id);

const getDb = () => process.env.MONGO_DB;
const getDbUri = () => process.env.MONGO_URI;

const getCollection = (client, collection) => client.db(getDb()).collection(collection);

class AbsRepository {
	constructor() {
		const client = new MongoClient(getDbUri());
		const connectionPromise = client.connect().catch(console.error);
		this.getConnectedClient = () => connectionPromise;
	}

	count = (collection, query, success, error) => {
		this.getConnectedClient()
			.then(async (client) => {
				try {
					const col = getCollection(client, collection);
					const result = await col.countDocuments(query);
					success(result);
				} catch (err) {
					error(err);
				}
			})
			.catch(error);
	};

	find = (collection, query, success, error) => {
		this.getConnectedClient()
			.then(async (client) => {
				try {
					const col = getCollection(client, collection);
					const result = await col.find(query).toArray();
					success(result);
				} catch (err) {
					error(err);
				}
			})
			.catch(error);
	};

	insert = (collection, obj, success, error) => {
		this.getConnectedClient()
			.then(async (client) => {
				try {
					const col = getCollection(client, collection);
					const result = await col.insertOne(obj);
					success({ ...obj, _id: result.insertedId });
				} catch (err) {
					error(err);
				}
			})
			.catch(error);
	};

	remove = (collection, obj, success, error) => {
		this.getConnectedClient()
			.then(async (client) => {
				try {
					const col = getCollection(client, collection);
					const result = await col.deleteOne({ _id: newId(obj._id) });
					success(result);
				} catch (err) {
					error(err);
				}
			})
			.catch(error);
	};

	update = (collection, obj, success, error) => {
		this.getConnectedClient()
			.then(async (client) => {
				try {
					const col = getCollection(client, collection);
					const result = await col.updateOne({ _id: newId(obj._id) }, { $set: obj.update });
					success(result);
				} catch (err) {
					error(err);
				}
			})
			.catch(error);
	};
}

export default AbsRepository;
