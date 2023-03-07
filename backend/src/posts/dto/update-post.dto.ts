import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Comment } from 'src/comments/entities/comment.entity';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  user?: Usuario;
  comments?: Comment[];
}
