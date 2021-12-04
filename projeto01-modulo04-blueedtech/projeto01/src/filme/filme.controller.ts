import { Controller, Get } from "@nestjs/common";
import {FilmeService} from './filme.service'


@Controller()
export class FilmeController {
  constructor (private readonly filmeService: FilmeService) {}

  @Get()
  getHello(): string {
    return this.filmeService.getHello();
  }


}