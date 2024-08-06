import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
} from '@nestjs/common';
import { ZodValidationPipe } from '../../pipes/zod-validation.pipe';
import { PrismaService } from '../../services/prisma.service';
import { z } from 'zod';

const createTodoBodySchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  color: z.string().optional(),
});

type CreateTodoBodySchema = z.infer<typeof createTodoBodySchema>;

@Controller('/todos')
export class CreateTodoController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ZodValidationPipe(createTodoBodySchema))
  async handle(@Body() body: CreateTodoBodySchema) {
    const { title, description, color } = body;

    const createdTodo = await this.prisma.todo.create({
      data: {
        title,
        description,
        color,
      },
    });

    return createdTodo;
  }
}
