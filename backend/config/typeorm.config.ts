import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import databaseConfig from './database.config';

config();

export default new DataSource(databaseConfig() as DataSourceOptions);
