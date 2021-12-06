import { Module } from '@nestjs/common';
import { FilmesModule } from 'src/filmes/filmes.module';
import { GenerosModule } from 'src/generos/generos.module';
import { ParticipantesModule } from 'src/participantes/participantes.module';

@Module({
  imports: [FilmesModule, ParticipantesModule, GenerosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
