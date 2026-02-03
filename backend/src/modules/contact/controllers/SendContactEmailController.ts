import { Request, Response } from 'express';
import { sendContactEmailSchema } from '../validators/sendContactEmail.schema.js';
import { SendContactEmailUseCase } from '../usecases/sendContactEmail/SendContactEmailUseCase.js';

export class SendContactEmailController {
  constructor(private useCase: SendContactEmailUseCase) {}

  async handle(req: Request, res: Response) {
    const parsed = sendContactEmailSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        error: 'Dados inválidos.',
        details: parsed.error.flatten(),
      });
    }

    await this.useCase.execute(parsed.data);
    return res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  }
}
