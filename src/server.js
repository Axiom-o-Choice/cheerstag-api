import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const PORT = process.env.PORT || 3000;

const client = new MongoClient(process.env.MONGODB_URI);

(async () => {
    await client.connect();

    const db = client.db("cheerstag");
    const collection = db.collection("qr");

    app.get("/", async (_req, res) => {
        const docs = await collection.find().toArray();

        return res.json(docs);
    });

    app.listen(PORT, () => {
        console.log(`API listening on :${PORT}`);
    });
})();
