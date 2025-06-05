import type { Todo } from "../models/Todo";
import { TodoView } from "./TodoView";

type TodosProps = {
  todos: Todo[];
  toggleCompleted: (id: number) => void;
  removeTodo: (id: number) => void;
};

//-- Displaying all todos --//
export const Todos = ({ todos, toggleCompleted, removeTodo }: TodosProps) => {
  return (
    <>
      <section>
        <ul className="space-y-8">
          {todos.map((todo) => (
            <TodoView key={todo.id} todo={todo} toggleCompleted={toggleCompleted} removeTodo={removeTodo} />
          ))}
        </ul>
      </section>
    </>
  );
};
