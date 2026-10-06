// api/characters.js (Vercel Serverless)
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
  try {
    await client.connect();
    const characters = await client.db('OraxDB').collection('characters').find({}).toArray();
    res.status(200).json(characters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
