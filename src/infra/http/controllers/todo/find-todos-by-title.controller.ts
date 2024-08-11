// TODO: IMPLEMENT
import { Controller } from '@nestjs/common';
import { FindTodosByTitleUseCase } from 'src/domain/use-cases/todo/find-todos-by-title';

@Controller('/todos')
export class FindTodosByTitleController {
  constructor(private findTodosByTitleUseCase: FindTodosByTitleUseCase) {}
}
