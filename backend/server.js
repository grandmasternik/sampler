import express from "express";
import cors from "cors"
import ;

const app = express;

app.use(cors())
app.use(express.json())

app.use()

/* asterick means wildcard. If someone goes to a route not in route file */
app.use("*", (req, res) => res.status(404).json({ error: "Not Found"}))
export default app