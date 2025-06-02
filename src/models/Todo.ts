export class Todo {
  id: number;
  task: string;
  priority: string;
  description: string;
  completed: boolean;
  constructor(task: string, priority: string, description: string, completed: boolean) {
    this.id = Date.now() + Math.floor(Math.random() * 100);
    this.priority = priority;
    this.task = task;
    this.description = description;
    this.completed = completed;
  }
}
