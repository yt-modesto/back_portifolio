import { DataSource } from 'typeorm';
import { Comment } from './entities/comment.entity';

export const commentProviders = [
  {
    provide: 'COMMENT_REPOSITORY',
    useFactory: (connection: DataSource) => connection.getRepository(Comment),
    inject: ['DATA_SOURCE'],
  },
];
