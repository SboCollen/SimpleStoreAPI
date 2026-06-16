import dotenv from '@dotenvx/dotenvx';
import * as path from 'path';

dotenv.config(
  {path : path.resolve(process.cwd(), 'environment/.env') } 
);

