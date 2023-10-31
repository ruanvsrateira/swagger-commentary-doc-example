import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TodoStatus } from 'src/enums/todo-status.enum';

export class UpdateTodoDto {
  /**
   * Aqui será inserido o titulo da tarefa
   * @example "Titulo Exemplo"
   */
  @IsString()
  @IsNotEmpty()
  title: string;

  /**
   * Aqui será inserido a descrição da tarefa
   * @example "Descrição da tarefa Exemplo"
   */
  @IsString()
  @IsNotEmpty()
  description: string;

  /**
   * Aqui será inserido o status da tarefa (se é todo, in progress, finalized)
   * @example "in progress"
   */
  @IsEnum(TodoStatus)
  @IsNotEmpty()
  status: string;
}
