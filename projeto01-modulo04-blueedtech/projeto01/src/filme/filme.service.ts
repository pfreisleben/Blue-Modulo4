import { Injectable } from '@nestjs/common';

@Injectable()
export class FilmeService {

  getHello() {
    return 'Olá Mundo!'
  }
}
