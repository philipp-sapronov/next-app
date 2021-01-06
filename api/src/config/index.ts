export interface EnvVariables {
  NODE_ENV: 'development' | 'production';
  MAILER_HOST: string;
  MAILER_PORT: number;
  MAILER_AUTH_USER: string;
  MAILER_AUTH_PASSWORD: string;
  TELEGRAM_TOKEN: string;
  TELEGRAM_GROUP_ID: number;
}

export default (): EnvVariables => {
  console.log(process.env.MAILER_PORT, process.env.MAILER_PORT);

  return {
    NODE_ENV: 'development',
    MAILER_HOST: process.env.MAILER_HOST,
    MAILER_PORT: parseInt(process.env.MAILER_PORT, 10),
    MAILER_AUTH_USER: process.env.MAILER_AUTH_USER,
    MAILER_AUTH_PASSWORD: process.env.MAILER_AUTH_PASSWORD,
    TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
    TELEGRAM_GROUP_ID: parseInt(process.env.TELEGRAM_GROUP_ID, 10),
  };
};
