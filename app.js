import express from 'express';
import helmet from "helmet";
import cors from 'cors';
import routes from './src/routes/web.routes.js'

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes)

app.listen(3000)