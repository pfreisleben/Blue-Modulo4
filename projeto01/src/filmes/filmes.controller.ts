import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post()
  create(@Body() createFilmeDto: CreateFilmeDto) {
    createFilmeDto.data_lancamento = new Date(
      createFilmeDto.data_lancamento,
    ).toISOString();
    createFilmeDto.tempo_duracao = new Date(
      createFilmeDto.tempo_duracao,
    ).toISOString();
    return this.filmesService.createPrisma(createFilmeDto);
  }

  @Get()
  findAll() {
    return this.filmesService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmesService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateFilmeDto) {
    return this.filmesService.updateOnePrisma(+id, updateFilmeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmesService.removeOnePrisma(+id);
  }
}
