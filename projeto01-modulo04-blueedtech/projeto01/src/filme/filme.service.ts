import { Injectable } from '@nestjs/common';
import { PrismaClient } from '.prisma/client';

@Injectable()
export class FilmeService {

  getHello() {
    return 'Olá Mundo!'
  }
}
