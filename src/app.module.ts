import { Module } from '@nestjs/common';
import { CreateTodoController } from './controllers/todo/create-todo.controller';
import { PrismaService } from './services/prisma.service';
import { GetTodosController } from './controllers/todo/get-todos.controller';

@Module({
  imports: [],
  controllers: [CreateTodoController, GetTodosController],
  providers: [PrismaService],
})
export class AppModule {}
