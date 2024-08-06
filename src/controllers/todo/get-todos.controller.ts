import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';

@Controller('/todos')
export class GetTodosController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async handle() {
    return await this.prisma.todo.findMany();
  }
}
