import { Module } from '@nestjs/common';
import { ParticipantesService } from './participantes.service';
import { ParticipantesController } from './participantes.controller';
import { PrismaClient } from '.prisma/client';

@Module({
  controllers: [ParticipantesController],
  providers: [ParticipantesService, PrismaClient],
})
export class ParticipantesModule {}
