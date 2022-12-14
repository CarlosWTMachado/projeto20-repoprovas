import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import router from './Routers/index';
import errorHandler from './Middlewares/handleErrors';

const app = express();
app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler);

export default app;

