import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { PrismaClient, Genero } from '.prisma/client';

@Injectable()
export class GenerosService {
  constructor(private readonly prisma: PrismaClient) {}
  create(createGeneroDto: CreateGeneroDto) {
    return this.prisma.genero.create({
      data: { ...createGeneroDto },
    });
  }

  findAll() {
    return `This action returns all generos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} genero`;
  }

  update(id: number, updateGeneroDto: UpdateGeneroDto) {
    return `This action updates a #${id} genero`;
  }

  remove(id: number) {
    return `This action removes a #${id} genero`;
  }
}
