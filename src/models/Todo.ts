export class Todo {
  id: number;
  task: string;
  description: string;
  completed: boolean;
  constructor(task: string, description: string, completed: boolean) {
    this.id = Date.now();
    this.task = task;
    this.description = description;
    this.completed = completed;
  }
}
