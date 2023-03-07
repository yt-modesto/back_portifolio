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
      isAdmin: isAdmin !== null ? isAdmin : false,
      isVisitant: isVisitant !== null ? isVisitant : false,
    };

    return await this.userRepository.save(userVerifiked);
  }

  async findAll(): Promise<Array<IUsers>> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<IUsers> {
    return await this.userRepository.findOne({ where: { id } });
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
  async findByEmailAndPassowrd(
    email: string,
    password: string,
  ): Promise<IUsers> {
    return await this.userRepository.findOne({ where: { email, password } });
  }
}
