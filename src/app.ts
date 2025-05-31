import express from "express";
import bodyParser from "body-parser";
import indexRoutes from "./routes/indexRoutes";

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use('/', indexRoutes);

export default app;