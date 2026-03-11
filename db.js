import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("applications.db");

db.exec(`
	CREATE TABLE IF NOT EXISTS applications (
		id		INTEGER PRIMARY KEY AUTOINCREMENT,
		company		TEXT NOT NULL
	)
`);
