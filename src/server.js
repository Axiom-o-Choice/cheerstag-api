import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const PORT = process.env.PORT || 3000;

const mongoUri = process.env.MONGODB_URI || "x";

app.get("/", (_req, res) => res.json({ a: mongoUri.charAt(0) }));
app.get("/api", (_req, res) => res.json({ b: mongoUri.charAt(0) }));

app.listen(PORT, () => {
    console.log(`API listening on :${PORT}`);
});
