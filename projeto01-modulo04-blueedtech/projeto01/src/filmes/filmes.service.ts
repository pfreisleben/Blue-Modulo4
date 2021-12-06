import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { PrismaClient } from '.prisma/client';
import { Filme } from '.prisma/client';


@Injectable()
export class FilmesService {
  constructor(private readonly prisma: PrismaClient) {}

  async createPrisma(createFilmeDto: CreateFilmeDto) {
    return await this.prisma.filme.create({
      data: { ...createFilmeDto },
    })
  }
  create(createFilmeDto: CreateFilmeDto) {
    return 'This action adds a new filme';
  }

  findAll() {
    return `This action returns all filmes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} filme`;
  }

  update(id: number, updateFilmeDto: UpdateFilmeDto) {
    return `This action updates a #${id} filme`;
  }

  remove(id: number) {
    return `This action removes a #${id} filme`;
  }
}
