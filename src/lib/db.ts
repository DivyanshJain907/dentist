import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "dentist_cms";

let clientPromise: Promise<MongoClient> | undefined;

export async function getDb() {
  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable.");
  }

  if (!clientPromise) {
    const client = new MongoClient(uri);
    clientPromise = client.connect();
  }

  const client = await clientPromise;
  return client.db(dbName);
}
