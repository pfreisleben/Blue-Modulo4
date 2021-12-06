import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { FilmesController } from './filmes.controller';
import { PrismaClient } from '.prisma/client';

@Module({
  imports: [],
  controllers: [FilmesController],
  providers: [FilmesService, PrismaClient]
})
export class FilmesModule {}
