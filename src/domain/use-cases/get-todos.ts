import { Injectable } from '@nestjs/common';
import { TodoRepository } from '../application/repositories/todo-repository';

@Injectable()
export class GetTodosUseCase {
  constructor(private todoRepository: TodoRepository) {}

  async execute() {
    return await this.todoRepository.get();
  }
}
