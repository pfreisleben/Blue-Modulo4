import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParticipantesService } from './participantes.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';

@Controller('participantes')
export class ParticipantesController {
  constructor(private readonly participantesService: ParticipantesService) {}

  @Post()
  create(@Body() createParticipanteDto: CreateParticipanteDto) {
    createParticipanteDto.data_nascimento = new Date(
      createParticipanteDto.data_nascimento,
    ).toISOString();
    return this.participantesService.createOnePrisma(createParticipanteDto);
  }

  @Get()
  findAll() {
    return this.participantesService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.participantesService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateParticipanteDto: UpdateParticipanteDto,
  ) {
    return this.participantesService.updateOnePrisma(
      +id,
      updateParticipanteDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.participantesService.removeOnePrisma(+id);
  }
}
