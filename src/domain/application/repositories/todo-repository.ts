import { Prisma, Todo } from '@prisma/client';

export abstract class TodoRepository {
  abstract findById(id: number): Promise<Todo | undefined>;
  abstract create(data: Prisma.TodoCreateInput): Promise<Todo>;
  abstract get(): Promise<Todo[]>;
  abstract delete(todo: Todo): Promise<Todo | undefined>;
}
