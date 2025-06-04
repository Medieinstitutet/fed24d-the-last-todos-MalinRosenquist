import { useState } from "react";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

//---------PARENT----------//
// Holds the state

export const TodoApp = () => {
  const defaultTodos = [
    new Todo("Plant tomatoes", "high", "Plant tomato seedlings in the greenhouse", false),
    new Todo("Water flowers", "high", "Water the flower bed at the front", true),
    new Todo("Weed the garden", "low", "Remove weeds between the planting boxes", false),
    new Todo("Fertilize vegetable patch", "high", "Use compost and cow manure", false),
    new Todo("Prune the apple tree", "medium", "Remove dead branches and shape the crown", true),
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
      const order: { [key: string]: number } = { high: 1, medium: 2, low: 3 };
      return order[a.priority] - order[b.priority];
    }
    if (sortOption === "task") {
      return a.title.localeCompare(b.title);
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
