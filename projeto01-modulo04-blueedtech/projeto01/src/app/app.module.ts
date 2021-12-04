import { Module } from '@nestjs/common';
import { FilmeModule } from 'src/filme/filme.module';

@Module({
  imports: [FilmeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
