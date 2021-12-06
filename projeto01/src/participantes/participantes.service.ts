import { Injectable } from '@nestjs/common';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
import { PrismaClient, Participante } from '.prisma/client';

@Injectable()
export class ParticipantesService {
  constructor(private readonly prisma: PrismaClient) {}

  createOnePrisma(
    createParticipanteDto: CreateParticipanteDto,
  ): Promise<Participante> {
    return this.prisma.participante.create({
      data: { ...createParticipanteDto },
    });
  }

  findAllPrisma(): Promise<Participante[]> {
    return this.prisma.participante.findMany();
  }

  findOnePrisma(id: number): Promise<Participante> {
    return this.prisma.participante.findUnique({
      where: { id },
    });
  }

  updateOnePrisma(
    id: number,
    updateParticipanteDto: UpdateParticipanteDto,
  ): Promise<Participante> {
    return this.prisma.participante.update({
      data: { ...updateParticipanteDto },
      where: { id },
    });
  }

  removeOnePrisma(id: number) {
    return `This action removes a #${id} participante`;
  }
}
