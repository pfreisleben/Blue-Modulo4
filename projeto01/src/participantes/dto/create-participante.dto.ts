import {
  IsNotEmpty,
  IsInt,
  IsString,
  IsBoolean,
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

  @IsBoolean()
  @IsNotEmpty()
  ator: boolean;

  @IsBoolean()
  @IsNotEmpty()
  staff: boolean;

  @IsInt()
  @IsNotEmpty()
  filmeId: number;
}
