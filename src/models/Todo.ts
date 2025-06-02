export class Todo {
  id: number;
  task: string;
  description: string;
  completed: boolean;
  constructor(task: string, description: string, completed: boolean) {
    this.id = Date.now() + Math.floor(Math.random() * 100);
    this.task = task;
    this.description = description;
    this.completed = completed;
  }
}
