//---------CHILD----------//
// Displaying all todos

import type { Todo } from "../models/Todo";
import { TodoView } from "./TodoView";

type TodosProps = {
  todos: Todo[];
  toggleCompleted: (id: number) => void;
};

export const Todos = ({ todos, toggleCompleted }: TodosProps) => {
  return (
    <>
      <section>
        <ul>
          {todos.map((todo) => (
            <TodoView key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />
          ))}
        </ul>
      </section>
    </>
  );
};
