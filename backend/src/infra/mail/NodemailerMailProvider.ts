import nodemailer from 'nodemailer';
import { env } from '../../main/config/env.js';
import { MailProvider, SendMailParams } from './MailProvider.js';

export class NodemailerMailProvider implements MailProvider {
  private transporter = nodemailer.createTransport({
    host: env.mail.host,
    port: env.mail.port,
    secure: env.mail.port === 465,
    auth: {
      user: env.mail.user,
      pass: env.mail.pass,
    },
  });

  async sendMail({
    to,
    subject,
    html,
    replyTo,
  }: SendMailParams): Promise<void> {
    await this.transporter.sendMail({
      from: `"${env.mail.fromName}" <${env.mail.fromEmail}>`,
      to,
      subject,
      html,
      replyTo,
    });
  }
}
