import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { TodoStatus } from 'src/enums/todo-status.enum';

@Injectable()
export class TodoService {
  todo: Todo;

  constructor() {
    this.todo = {
      title: 'title example 1',
      description: 'description example 1',
      status: TodoStatus.IN_PROGESS,
    };
  }

  create(todo: CreateTodoDto): Todo {
    return todo;
  }

  findAll(): Todo[] {
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
