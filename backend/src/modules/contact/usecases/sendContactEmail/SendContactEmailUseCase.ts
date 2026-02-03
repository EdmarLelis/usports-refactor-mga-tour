import { env } from '../../../../main/config/env.js';
import { AppError } from '../../../../shared/errors/AppError.js';
import { MailProvider } from '../../../../infra/mail/MailProvider.js';
import { SendContactEmailDTO } from '../../dtos/SendContactEmailDTO.js';

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export class SendContactEmailUseCase {
  constructor(private mailProvider: MailProvider) {}

  async execute(data: SendContactEmailDTO): Promise<void> {
    if (data.message.trim().length < 5) {
      throw new AppError('Mensagem inválida.');
    }

    const safeName = escapeHtml(data.name);
    const safeEmail = escapeHtml(data.email);
    const safePhone = escapeHtml(data.phone ?? '');
    const safeMessage = escapeHtml(data.message).replaceAll('\n', '<br/>');

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.4;">
        <h2>Novo contato pelo site</h2>
        <p><strong>Nome:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        ${safePhone ? `<p><strong>Telefone:</strong> ${safePhone}</p>` : ''}
        <hr/>
        <p><strong>Mensagem:</strong></p>
        <p>${safeMessage}</p>
      </div>
    `;

    await this.mailProvider.sendMail({
      to: env.mail.to,
      subject: `Contato do site - ${data.name}`,
      html,
      replyTo: data.email,
    });
  }
}
