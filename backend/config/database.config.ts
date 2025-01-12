import { registerAs } from '@nestjs/config';
import * as entities from '../entities';
import * as path from 'path';
import * as typeOrmStrategies from 'typeorm-naming-strategies';

const SnakeNamingStrategy = typeOrmStrategies.SnakeNamingStrategy;

export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: Object.values(entities),
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV !== 'production',
  migrations: [path.resolve(__dirname, '../migrations/**/*{.ts,.js}')],
  namingStrategy: new SnakeNamingStrategy(),
}));
