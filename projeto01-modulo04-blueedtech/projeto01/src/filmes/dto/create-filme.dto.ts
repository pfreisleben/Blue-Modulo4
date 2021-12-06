import { IsNotEmpty, IsInt, IsString, isString, isDate, IsDate, IsNumber } from 'class-validator';
export class CreateFilmeDto {

  @IsString()
  @IsNotEmpty()
  nome: string

  @IsString()
  imagem: string

  @IsDate()
  @IsNotEmpty()
  data_lancamento: number

  @IsNotEmpty()
  @IsNumber()
  tempo_duracao: number

  



  
}
