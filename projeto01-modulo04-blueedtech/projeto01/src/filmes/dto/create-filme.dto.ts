import { IsNotEmpty, IsInt, IsString, isString, isDate, IsDate, IsNumber, IsDateString } from 'class-validator';
export class CreateFilmeDto {

  @IsString()
  @IsNotEmpty()
  nome: string

  @IsString()
  imagem: string

  @IsDateString()
  @IsNotEmpty()
  data_lancamento: string

  @IsNotEmpty()
  @IsDateString()
  tempo_duracao: string

  



  
}
