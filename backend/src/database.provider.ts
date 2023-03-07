import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'api_portif',
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'api_portif',
  entities: [__dirname + '/../**/*.entity.js'],
  migrations: [],
  synchronize: true,
});
