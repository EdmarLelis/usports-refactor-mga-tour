export interface SendMailParams {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export interface MailProvider {
  sendMail(params: SendMailParams): Promise<void>;
}
