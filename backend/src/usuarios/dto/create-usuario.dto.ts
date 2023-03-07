export class CreateUsuarioDto {
  email: string;
  password: string;
  isAdmin?: boolean;
  isVisitant?: boolean;
}
