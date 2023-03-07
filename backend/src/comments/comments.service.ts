import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { IComment } from './interfaces/comment.interface';

@Injectable()
export class CommentsService {
  constructor(
    @Inject('COMMENT_REPOSITORY')
    private commentRepository: Repository<Comment>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    return await this.commentRepository.save(createCommentDto);
  }

  async findAll(): Promise<Array<IComment>> {
    return await this.commentRepository.find();
  }

  async findOne(id: number): Promise<IComment> {
    return await this.commentRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    return await this.commentRepository.update({ id }, updateCommentDto);
  }

  async remove(id: number) {
    const user = await this.commentRepository.findOne({ where: { id } });
    if (user) {
      await this.commentRepository.delete(user);
    }
  }
}
