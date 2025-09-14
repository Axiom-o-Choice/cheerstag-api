import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const PORT = process.env.PORT || 3000;

const mongoUri = process.env.MONGODB_URI;
const client = new MongoClient(mongoUri);

app.get("/", async (_req, res) => {
    const db = "cheerstag";
    const collection = "qr";
    const query = {};

    const all = await client.db(db).collection(collection).find(query).toArray();

    res.json({ all });
});

app.get("/api", async (_req, res) => {
    const db = "cheerstag";
    const collection = "qr";
    const query = {};

    const all = await client.db(db).collection(collection).find(query).toArray();

    res.json({ all });
});

app.listen(PORT, () => {
    console.log(`API listening on :${PORT}`);
});
