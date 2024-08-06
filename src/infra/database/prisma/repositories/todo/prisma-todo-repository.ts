import { Prisma, Todo } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { Injectable } from '@nestjs/common';
import { TodoRepository } from '../../../../../domain/application/repositories/todo-repository';

@Injectable()
export class PrismaTodoRepository implements TodoRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: number): Promise<Todo | undefined> {
    return await this.prisma.todo.findFirst({ where: { id } });
  }

  async create(data: Prisma.TodoCreateInput): Promise<Todo> {
    return await this.prisma.todo.create({ data });
  }

  async get(): Promise<Todo[]> {
    return await this.prisma.todo.findMany();
  }

  async delete(todo: Todo): Promise<Todo | undefined> {
    return await this.prisma.todo.delete({ where: { id: todo.id } });
  }
}
