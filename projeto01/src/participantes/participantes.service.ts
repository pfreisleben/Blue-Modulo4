import { Injectable } from '@nestjs/common';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
import { Participante } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class ParticipantesService {
  constructor(private readonly prisma: PrismaService) {}

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
