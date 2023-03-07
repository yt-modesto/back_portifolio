import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Comment } from 'src/comments/entities/comment.entity';

export class CreatePostDto {
  user: Usuario;
  comments: Comment[];
}
