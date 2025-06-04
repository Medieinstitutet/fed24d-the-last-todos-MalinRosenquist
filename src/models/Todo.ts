export type Priority = "high" | "medium" | "low";

export class Todo {
  id: number;
  title: string;
  priority: Priority;
  description: string;
  completed: boolean;

  constructor(title: string, priority: Priority, description: string, completed: boolean) {
    this.id = Date.now() + Math.floor(Math.random() * 100);
    this.priority = priority;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}
