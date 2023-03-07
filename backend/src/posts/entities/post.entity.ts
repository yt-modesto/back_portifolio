import { Comment } from 'src/comments/entities/comment.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToOne(() => Usuario)
  @JoinColumn()
  user: Usuario;

  @OneToMany(() => Comment, (comment) => comment.postc)
  comments: Comment[];
}
