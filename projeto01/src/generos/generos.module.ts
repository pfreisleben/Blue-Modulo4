import { Module } from '@nestjs/common';
import { GenerosService } from './generos.service';
import { GenerosController } from './generos.controller';
import { PrismaClient } from '.prisma/client';

@Module({
  controllers: [GenerosController],
  providers: [GenerosService, PrismaClient],
})
export class GenerosModule {}
