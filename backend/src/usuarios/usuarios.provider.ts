import { DataSource } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

export const usuarioProviders = [
  {
    provide: 'USUARIO_REPOSITORY',
    useFactory: (connection: DataSource) => connection.getRepository(Usuario),
    inject: ['DATA_SOURCE'],
  },
];
