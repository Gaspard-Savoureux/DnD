import { Db, MongoClient } from 'mongodb';
import { DATABASE_URI, DATABASE_NAME } from '../serverConfig';

export const client = new MongoClient(DATABASE_URI);
let database: Db | null = null;

async function initializeDb() {
    try {
        await client.connect();
        database = client.db(DATABASE_NAME);
    } catch (error) {
        console.error(error);
        client.close();
        process.exit(1);
    }
}

export async function getDb() {
    if (!database) {
        await initializeDb();
    }
    return database;
}
