import { Inject, Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
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

  /** 
   * @TODO lembrar metodo update retorna um objeto, UpdateResult -- contendo 
   * {
    "generatedMaps": [],
    "raw": [],
    "affected": 1       -- atualizou 1 item 
} */

  /**
   * @description this method it checks if this user really exists in the database,
   *  if it exists it updates it and @return UpdateResult "Object", if it does not exist it @returns a null*/

  async update(
    id: number,
    updateUserDto: UpdateUsuarioDto,
  ): Promise<UpdateResult | null> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (user) {
      return await this.userRepository.update({ id }, updateUserDto);
    }
    return null;
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
