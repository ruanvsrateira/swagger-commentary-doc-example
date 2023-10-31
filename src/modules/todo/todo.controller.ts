import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiOperation({ summary: 'Criação de uma nova tarefa' })
  @ApiCreatedResponse({ description: 'Retorna tarefa criada com sucesso' })
  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @ApiOperation({ summary: 'Listagem de todas as tarefas registradas' })
  @ApiOkResponse({
    description: 'Retorna todas as tarefas registradas com sucesso',
  })
  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @ApiOperation({
    summary: 'Detalhes de uma tarefa de acordo com o ID passado',
  })
  @ApiParam({ name: 'id', example: '12' })
  @ApiOkResponse({ description: 'Retorna tarefa referente ao ID passado' })
  @ApiNotFoundResponse({
    description: 'Retorna erro de tarefa não encontrada com este ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @ApiOperation({ summary: 'Modificação de tarefa' })
  @ApiParam({ name: 'id', example: '12' })
  @ApiNotFoundResponse({
    description: 'Retorna erro de tarefa não encontrada com este ID',
  })
  @ApiCreatedResponse({ description: 'Retorna tarefa modificada com sucesso' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() todo: UpdateTodoDto) {
    return this.todoService.update(id, todo);
  }

  @ApiOperation({ summary: 'Deleção de uma tarefa' })
  @ApiParam({ name: 'id', example: '12' })
  @ApiOkResponse({
    description: 'Retorna tarefa que foi deletada com sucesso',
  })
  @ApiNotFoundResponse({
    description: 'Retorna erro de tarefa não encontrada com este ID',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
