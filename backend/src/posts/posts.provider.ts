import { DataSource } from 'typeorm';
import { Post } from './entities/post.entity';

export const postsProviders = [
  {
    provide: 'POST_REPOSITORY',
    useFactory: (connection: DataSource) => connection.getRepository(Post),
    inject: ['DATA_SOURCE'],
  },
];
