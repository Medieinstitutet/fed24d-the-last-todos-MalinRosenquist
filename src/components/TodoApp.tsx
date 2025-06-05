import { useState } from "react";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";
import { SortTodos } from "./SortTodos";

export const TodoApp = () => {
  // Default todo list used if no saved todos are found in localStorage
  const defaultTodos = [
    new Todo("Plant tomatoes", "high", "Plant tomato seedlings in the greenhouse", false),
    new Todo("Water flowers", "high", "Water the flower bed at the front", true),
    new Todo("Weed the garden", "low", "Remove weeds between the planting boxes", false),
    new Todo("Fertilize vegetable patch", "high", "Use compost and cow manure", false),
    new Todo("Prune the apple tree", "medium", "Remove dead branches and shape the crown", true),
  ];

  // Retrieve saved todos from localStorage if any exist
  const savedTodos = localStorage.getItem("todos");

  // State to hold all todos, initialized with savedTodos or defaultTodos
  const [todos, setTodos] = useState<Todo[]>(savedTodos ? JSON.parse(savedTodos) : defaultTodos);

  // State to track the currently selected sorting option
  const [sortOption, setSortOption] = useState<string>("default");

  // Adds a new todo at the top of the list
  const addTodo = (t: Todo) => {
    setTodos([t, ...todos]);
  };

  // Toggles the completed status of a todo by id
  const toggleCompleted = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  // Removes a todo by id
  const removeTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // Sorts todos based on the selected sortOption
  const sortedTodos = [...todos].sort((a, b) => {
    if (sortOption === "completed") {
      return a.completed === b.completed ? 0 : a.completed ? -1 : 1;
    }
    if (sortOption === "notCompleted") {
      return b.completed === a.completed ? 0 : b.completed ? -1 : 1;
    }
    if (sortOption === "priorityHigh") {
      const order: { [key: string]: number } = { high: 1, medium: 2, low: 3 };
      return order[a.priority] - order[b.priority];
    }
    if (sortOption === "priorityLow") {
      const order: { [key: string]: number } = { high: 1, medium: 2, low: 3 };
      return order[b.priority] - order[a.priority];
    }
    if (sortOption === "title") {
      return a.title.localeCompare(b.title);
    }
    // Default: no sorting (maintain current order)
    return 0;
  });

  // Save todos to localStorage on every render (state update)
  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex justify-center md:justify-end">
        <SortTodos sortOption={sortOption} setSortOption={setSortOption} />
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen mt-6 gap-10">
        <div>
          <AddTodo addTodo={addTodo} />
        </div>
        <div>
          <Todos todos={sortedTodos} toggleCompleted={toggleCompleted} removeTodo={removeTodo} />
        </div>
      </section>
    </div>
  );
};
