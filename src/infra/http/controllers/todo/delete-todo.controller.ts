import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { DeleteTodoUseCase } from '../../../../domain/use-cases/delete-todo';

@Controller('/todos')
export class DeleteTodoController {
  constructor(private deleteTodoUseCase: DeleteTodoUseCase) {}

  @Delete()
  @HttpCode(HttpStatus.OK)
  async handle(@Body() body: { id: number }) {
    const res = await this.deleteTodoUseCase.execute(body.id);

    if (res) return res;

    throw new NotFoundException();
  }
}
