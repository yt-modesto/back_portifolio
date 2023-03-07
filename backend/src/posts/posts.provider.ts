import { DataSource } from 'typeorm';
import { Post } from './entities/post.entity';

export const userProviders = [
  {
    provide: 'POST_REPOSITORY',
    useFactory: (connection: DataSource) => connection.getRepository(Post),
    inject: ['DATA_SOURCE'],
  },
];
