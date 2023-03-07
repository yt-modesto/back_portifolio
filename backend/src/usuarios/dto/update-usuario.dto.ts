import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  email: string;
  password?: string;
  isAdmin?: boolean;
  isVisitant?: boolean;
}
