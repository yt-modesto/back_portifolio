import { IUsers } from 'src/usuarios/interfaces/users.interface';
import { IComment } from 'src/comments/interfaces/comment.interface';

export interface IPost {
  id: number;
  user: IUsers;
  comments: IComment[];
}
