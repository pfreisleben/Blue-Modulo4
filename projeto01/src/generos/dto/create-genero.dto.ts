import { IsNotEmpty, IsString, IsInt } from 'class-validator';
export class CreateGeneroDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsInt()
  filmeId: number;
}
