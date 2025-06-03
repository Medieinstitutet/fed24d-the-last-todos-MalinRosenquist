import { useState } from "react";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

//---------PARENT----------//
// Holds the state

export const TodoApp = () => {
  const defaultTodos = [
    new Todo("Plantera tomater", "High", "Sätt tomatplantor i växthuset", false),
    new Todo("Vattna blommor", "High", "Vattna blomrabatten på framsidan", true),
    new Todo("Rensa ogräs", "Low", "Rensa ogräs mellan odlingslådorna", false),
    new Todo("Gödsla grönsakslandet", "High", "Använd kompostjord och kogödsel", false),
    new Todo("Beskär äppelträdet", "Medium", "Ta bort döda grenar och forma kronan", true),
  ];

  const savedTodos = localStorage.getItem("todos");

  const [todos, setTodos] = useState<Todo[]>(savedTodos ? JSON.parse(savedTodos) : defaultTodos);

  const [sortOption, setSortOption] = useState<string>("default");

  const addTodo = (t: Todo) => {
    setTodos([...todos, t]);
  };

  const toggleCompleted = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // Sorting
  const sortedTodos = [...todos].sort((a, b) => {
    if (sortOption === "completed") {
      return a.completed === b.completed ? 0 : a.completed ? -1 : 1;
    }
    if (sortOption === "priority") {
      const order: { [key: string]: number } = { High: 1, Medium: 2, Low: 3 };
      return order[a.priority] - order[b.priority];
    }
    if (sortOption === "task") {
      return a.task.localeCompare(b.task);
    }
    return 0;
  });

  localStorage.setItem("todos", JSON.stringify(todos));
  console.log(todos);

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <Todos todos={sortedTodos} toggleCompleted={toggleCompleted} removeTodo={removeTodo} sortOption={sortOption} setSortOption={setSortOption} />
    </>
  );
};
