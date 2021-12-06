import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { PrismaClient, Genero } from '.prisma/client';

@Injectable()
export class GenerosService {
  constructor(private readonly prisma: PrismaClient) {}
  createOnePrisma(createGeneroDto: CreateGeneroDto) {
    return this.prisma.genero.create({
      data: { ...createGeneroDto },
    });
  }

  findAllPrisma() {
    return this.prisma.genero.findMany();
  }

  findOnePrisma(id: number) {
    return `This action returns a #${id} genero`;
  }

  updateOnePrisma(id: number, updateGeneroDto: UpdateGeneroDto) {
    return `This action updates a #${id} genero`;
  }

  removeOnePrisma(id: number) {
    return `This action removes a #${id} genero`;
  }
}
