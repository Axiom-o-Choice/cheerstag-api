import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => res.json({}));

app.listen(PORT, () => {
    console.log(`API listening on :${PORT}`);
});
