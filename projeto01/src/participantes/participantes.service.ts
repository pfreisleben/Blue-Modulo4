import { Injectable } from '@nestjs/common';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
import { PrismaClient, Participante } from '.prisma/client';

@Injectable()
export class ParticipantesService {
  constructor(private readonly prisma: PrismaClient) {}

  createPrisma(createParticipanteDto: CreateParticipanteDto) {
    return this.prisma.participante.create({
      data: { ...createParticipanteDto },
    });
  }

  findAllPrisma() {
    return `This action returns all participantes`;
  }

  findOnePrisma(id: number) {
    return `This action returns a #${id} participante`;
  }

  updateOnePrisma(id: number, updateParticipanteDto: UpdateParticipanteDto) {
    return `This action updates a #${id} participante`;
  }

  removeOnePrisma(id: number) {
    return `This action removes a #${id} participante`;
  }
}
