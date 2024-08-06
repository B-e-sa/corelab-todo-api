import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { GetTodosUseCase } from '../../../../domain/use-cases/get-todos';

@Controller('/todos')
export class GetTodosController {
  constructor(private getTodosUseCase: GetTodosUseCase) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async handle() {
    return await this.getTodosUseCase.execute();
  }
}
