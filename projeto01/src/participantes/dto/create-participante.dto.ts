import {
  IsNotEmpty,
  IsInt,
  IsString,
  IsDate,
  IsNumber,
  IsDateString,
} from 'class-validator';
export class CreateParticipanteDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  imagem: string;

  @IsDateString()
  @IsNotEmpty()
  data_nascimento: string;

  @IsString()
  @IsNotEmpty()
  ator: string;

  @IsInt()
  @IsNotEmpty()
  filmeId: number;
}
