import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [DatabaseModule, UsuariosModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
