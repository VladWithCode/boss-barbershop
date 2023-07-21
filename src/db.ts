import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

async function connectToDb() {
	try {
		await mongoose.connect(
			process.env.MONGODB_CONN_STRING ||
				'mongodb://localhost:27017/tester-db'
		);
	} catch (e) {
		console.error('Error al conectarse a la base de datos');

		return e;
	}
}

export default connectToDb;
