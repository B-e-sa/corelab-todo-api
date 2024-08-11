import { Injectable } from '@nestjs/common';
import { TodoRepository } from '../../application/repositories/todo-repository';

@Injectable()
export class FindTodosByNameUseCase {
  constructor(private todoRepository: TodoRepository) {}

  async execute(name: string) {
    return await this.todoRepository.findByTitle(name);
  }
}
