import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export const config = {
  port: process.env.PORT || 3000,
  bgcrypt: {
    saltRounds: process.env.SALT_ROUNDS || 10,
  },
};
