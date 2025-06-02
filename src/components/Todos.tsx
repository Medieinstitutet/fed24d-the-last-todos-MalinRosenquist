//---------CHILD----------//
// Displaying all todos

import type { Todo } from "../models/Todo";
import { TodoView } from "./TodoView";

type TodosProps = {
  todos: Todo[];
};

export const Todos = ({ todos }: TodosProps) => {
  return (
    <>
      <section>
        <ul>
          {todos.map((todo) => (
            <TodoView key={todo.id} todo={todo} />
          ))}
        </ul>
      </section>
    </>
  );
};
