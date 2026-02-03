import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { routes } from './routes/index.js';
import { env } from './config/env.js';
import { errorHandler } from './middlewares/errorHandler.js';

export const app = express();

app.use(helmet());
app.use(cors({ origin: env.corsOrigin }));
app.use(express.json());

app.use(routes);

app.use(errorHandler);
