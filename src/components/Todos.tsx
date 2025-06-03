//---------CHILD----------//
// Displaying all todos

import type { Todo } from "../models/Todo";
import { SortTodos } from "./SortTodos";
import { TodoView } from "./TodoView";

type TodosProps = {
  todos: Todo[];
  toggleCompleted: (id: number) => void;
  removeTodo: (id: number) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
};

export const Todos = ({ todos, toggleCompleted, removeTodo, sortOption, setSortOption }: TodosProps) => {
  return (
    <>
      <SortTodos sortOption={sortOption} setSortOption={setSortOption} />
      <section>
        <ul>
          {todos.map((todo) => (
            <TodoView key={todo.id} todo={todo} toggleCompleted={toggleCompleted} removeTodo={removeTodo} />
          ))}
        </ul>
      </section>
    </>
  );
};
