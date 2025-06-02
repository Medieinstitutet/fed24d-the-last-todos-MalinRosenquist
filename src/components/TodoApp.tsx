import { useState } from "react";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

//---------PARENT----------//
// Holds the state

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Plantera tomater", "High", "Sätt tomatplantor i växthuset", false),
    new Todo("Vattna blommor", "High", "Vattna blomrabatten på framsidan", true),
    new Todo("Rensa ogräs", "Low", "Rensa ogräs mellan odlingslådorna", false),
    new Todo("Gödsla grönsakslandet", "High", "Använd kompostjord och kogödsel", false),
    new Todo("Beskär äppelträdet", "Medium", "Ta bort döda grenar och forma kronan", true),
  ]);

  const addTodo = (t: Todo) => {
    setTodos([...todos, t]);
  };

  const toggleCompleted = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  console.log(todos);
  return (
    <>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} toggleCompleted={toggleCompleted} removeTodo={removeTodo} />
    </>
  );
};
