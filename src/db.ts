import mongoose from "mongoose";

mongoose.set("strictQuery", false);

async function connectToDb() {
  try {
    return await mongoose.connect(
      process.env.DB_CONN_STRING || "mongodb://localhost:27017/tester-db"
    );
  } catch (e) {
    console.error("Error al conectarse a la base de datos");

    throw e;
  }
}

export default connectToDb;

const readyStates = {
  disconnected: 0,
  connected: 1,
  connecting: 2,
  disconnecting: 3,
};

let pendingPromise: Promise<typeof mongoose> | undefined | null = null;

export async function getDBConnection() {
  try {
    const { readyState } = mongoose.connection;

    if (readyState === readyStates.connected) {
      return [null, true];
    } else if (pendingPromise) {
      await pendingPromise;
      return [null, true];
    }

		pendingPromise = connectToDb();

		await pendingPromise;

		return [null, true]
  } catch (e) {
    return [e, null];
  } 
}
