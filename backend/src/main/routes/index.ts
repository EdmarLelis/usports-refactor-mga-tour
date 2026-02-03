import { Router } from 'express';
import { emailRoutes } from './email.routes.js';

export const routes = Router();

routes.get('/health', (_req, res) => res.json({ ok: true }));
routes.use('/api', emailRoutes);
