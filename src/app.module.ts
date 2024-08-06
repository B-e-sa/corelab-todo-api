import { Module } from '@nestjs/common';
import { CreateTodoController } from './controllers/todo/create-todo.controller';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [],
  controllers: [CreateTodoController],
  providers: [PrismaService],
})
export class AppModule {}
