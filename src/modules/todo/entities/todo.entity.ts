export class TodoEntity {
  /**
   * Aqui será inserido o titulo da tarefa
   * @example "a823875b-396d-45ad-a8dc-89b41cb0fa5d"
   */
  id: string;

  /**
   * Aqui será inserido o titulo da tarefa
   * @example "Descrição da tarefa Exemplo"
   */
  title: string;

  /**
   * Aqui será inserido a descrição da tarefa
   * @example "Descrição da tarefa Exemplo"
   */
  description: string;

  /**
   * Aqui será inserido o status da tarefa (se é todo, in progress, finalized)
   * @example "in progress"
   */
  status: string;
}
