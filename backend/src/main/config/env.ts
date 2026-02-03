import dotenv from 'dotenv';
dotenv.config();

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env: ${name}`);
  return value;
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 5000),
  corsOrigin: required('CORS_ORIGIN'),

  mail: {
    host: required('MAIL_HOST'),
    port: Number(required('MAIL_PORT')),
    user: required('MAIL_USER'),
    pass: required('MAIL_PASS'),
    fromName: required('MAIL_FROM_NAME'),
    fromEmail: required('MAIL_FROM_EMAIL'),
    to: required('MAIL_TO'),
  },
};
