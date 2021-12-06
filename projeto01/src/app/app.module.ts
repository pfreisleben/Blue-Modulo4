import { Module } from '@nestjs/common';
import { FilmesModule } from 'src/filmes/filmes.module';
import { ParticipantesModule } from 'src/participantes/participantes.module';

@Module({
  imports: [FilmesModule, ParticipantesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
