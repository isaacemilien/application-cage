import express from "express";
import db from "./db.js";

const app = express();
const PORT = 3001;

app.get("/applications", (req, res) => {
	const rows = db.prepare("SELECT * FROM applications").all();
	
	res.json(rows);
});

app.listen(PORT, () => {
	console.log(`Server: http://localhost:${PORT}`);
});
