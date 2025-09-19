import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const mongoUri = process.env.MONGODB_URI;
const client = new MongoClient(mongoUri);

await client.connect();

app.get("/", async (req, res) => {
    res.json({});
});

app.get("/tags/:id", async (req, res) => {
    const { id } = req.params;
    const db = "cheerstag";
    const collection = "tags";
    const query = { _id: id };

    const result = await client.db(db).collection(collection).findOne(query);

    res.json({ result });
});

app.put("/tags/:id", async (req, res) => {
    const { id } = req.params;
    const text = req.body.text;

    const db = "cheerstag";
    const collection = "tags";

    const query = { _id: id };

    {
        const result = await client.db(db).collection(collection).findOne(query);

        if (result && result.text) return res.json({});
    }

    const filter = { _id: id };
    const update = { $set: { text } };

    const result = await client.db(db).collection(collection).updateOne(filter, update);

    res.json({ result });
});

app.get("/boxes/:id", async (req, res) => {
    const { id } = req.params;
    const db = "cheerstag";
    const collection = "boxes";
    const query = { _id: id };

    const result = await client.db(db).collection(collection).findOne(query);

    res.json({ result });
});

app.put("/boxes/:id", async (req, res) => {
    const { id } = req.params;
    const text = req.body.text;

    const db = "cheerstag";
    const collection = "boxes";

    const query = { _id: id };

    {
        const result = await client.db(db).collection(collection).findOne(query);

        if (result && result.text) return res.json({});
    }

    const filter = { _id: id };
    const update = { $set: { text } };

    const result = await client.db(db).collection(collection).updateOne(filter, update);

    res.json({ result });
});

app.get("/api/tags/:id", async (req, res) => {
    const { id } = req.params;
    const db = "cheerstag";
    const collection = "tags";
    const query = { _id: id };

    const result = await client.db(db).collection(collection).findOne(query);

    res.json({ result });
});

app.put("/api/tags/:id", async (req, res) => {
    const { id } = req.params;
    const text = req.body.text;

    const db = "cheerstag";
    const collection = "tags";

    const query = { _id: id };

    {
        const result = await client.db(db).collection(collection).findOne(query);

        if (result && result.text) return res.json({});
    }

    const filter = { _id: id };
    const update = { $set: { text } };

    const result = await client.db(db).collection(collection).updateOne(filter, update);

    res.json({ result });
});

app.get("/api/boxes/:id", async (req, res) => {
    const { id } = req.params;
    const db = "cheerstag";
    const collection = "boxes";
    const query = { _id: id };

    const result = await client.db(db).collection(collection).findOne(query);

    res.json({ result });
});

app.put("/api/boxes/:id", async (req, res) => {
    const { id } = req.params;
    const text = req.body.text;

    const db = "cheerstag";
    const collection = "boxes";
    const query = { _id: id };

    {
        const result = await client.db(db).collection(collection).findOne(query);

        if (result && result.text) return res.json({});
    }

    const doc = {
        _id: id,
        text
    };

    const result = await client.db(db).collection(collection).updateOne(doc);

    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`API listening on :${PORT}`);
});
