import dotenv from '@dotenvx/dotenvx';
import * as path from 'path';

dotenv.config(
  {path : path.resolve(process.cwd(), 'environment/.env') } 
);


export const validatedBaseUrl = (() => {
  const base = process.env.BaseUrl;
  if (!base) throw new Error('BaseUrl is not defined');
  return base.replace(/\/$/, ''); 
})();

