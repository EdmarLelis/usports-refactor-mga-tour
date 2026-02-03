import { Router } from 'express';
import { contactRateLimiter } from '../middlewares/rateLimiter.js';
import { NodemailerMailProvider } from '../../infra/mail/NodemailerMailProvider.js';
import { SendContactEmailUseCase } from '../../modules/contact/usecases/sendContactEmail/SendContactEmailUseCase.js';
import { SendContactEmailController } from '../../modules/contact/controllers/SendContactEmailController.js';

export const emailRoutes = Router();

const mailProvider = new NodemailerMailProvider();
const useCase = new SendContactEmailUseCase(mailProvider);
const controller = new SendContactEmailController(useCase);

emailRoutes.post('/send-email', contactRateLimiter, (req, res) =>
  controller.handle(req, res),
);
