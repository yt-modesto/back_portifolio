import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { AuthService } from './auth.service';
import { jwtContant } from './helpers/jwtConstant';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { DatabaseModule } from 'src/database/database.module';
import { usuarioProviders } from 'src/usuarios/usuarios.provider';

@Module({
  imports: [
    DatabaseModule,
    UsuariosModule,
    PassportModule,
    JwtModule.register({
      secret: jwtContant.secrets,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [
    UsuariosService,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    ...usuarioProviders,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
