import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoEntity } from './entities/todo.entity';
import { TodoStatusEnum } from 'src/enums/todo-status.enum';
import { randomUUID } from 'crypto';

@Injectable()
export class TodoService {
  todo: TodoEntity;

  constructor() {
    this.todo = {
      id: randomUUID(),
      title: 'title example 1',
      description: 'description example 1',
      status: TodoStatusEnum.IN_PROGESS,
    };
  }

  create(todo: CreateTodoDto): TodoEntity {
    return this.todo;
  }

  findAll(): TodoEntity[] {
    return [this.todo, this.todo];
  }

  findOne(id: number) {
    return this.todo;
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todo;
  }

  remove(id: number) {
    return this.todo;
  }
}
