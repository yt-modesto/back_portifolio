import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { IUsers } from './interfaces/users.interface';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private userRepository: Repository<Usuario>,
  ) {}
  async create(createUserDto: CreateUsuarioDto): Promise<IUsers> {
    const { email, password, isAdmin, isVisitant } = createUserDto;
    const userVerifiked: CreateUsuarioDto = {
      email,
      password,
      isAdmin: isAdmin !== undefined ? isAdmin : false,
      isVisitant: isVisitant !== undefined ? isVisitant : false,
    };

    return await this.userRepository.create(userVerifiked);
  }

  async findAll(): Promise<IUsers[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    // TODO: tratar: Promise<IUsers | null>;
    return await this.userRepository.find({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUsuarioDto) {
    return await this.userRepository.update({ id }, updateUserDto);
  }

  async remove(id: number) {
    const user = await this.userRepository.find({ where: { id } });
    if (user) {
      await this.userRepository.remove(user);
    }
  }
}
