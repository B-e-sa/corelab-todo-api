import { Module } from '@nestjs/common';
import { CreateTodoUseCase } from '../../domain/use-cases/create-todo';
import { DeleteTodoUseCase } from '../../domain/use-cases/delete-todo';
import { GetTodosUseCase } from '../../domain/use-cases/get-todos';
import { DatabaseModule } from '../database/database.module';
import { CreateTodoController } from './controllers/todo/create-todo.controller';
import { DeleteTodoController } from './controllers/todo/delete-todo.controller';
import { GetTodosController } from './controllers/todo/get-todos.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateTodoController, DeleteTodoController, GetTodosController],
  providers: [CreateTodoUseCase, DeleteTodoUseCase, GetTodosUseCase],
})
export class HttpModule {}
