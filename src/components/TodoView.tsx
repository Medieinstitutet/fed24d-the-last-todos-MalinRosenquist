import type { Todo } from "../models/Todo";

//---------GRANDCHILD----------//
// Single todo

type TodoViewProps = {
  todo: Todo;
  toggleCompleted: (id: number) => void;
  removeTodo: (id: number) => void;
};

export const TodoView = ({ todo, toggleCompleted, removeTodo }: TodoViewProps) => {
  return (
    <>
      <li key={todo.id}>
        <div>
          <h3>{todo.task}</h3>
          <p>{todo.priority}</p>
          <p>{todo.description}</p>
          <p>{todo.completed ? "Completed" : "Not completed"}</p>
          <div>
            <button onClick={() => toggleCompleted(todo.id)}>{todo.completed ? "Undo" : "Done"}</button>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </div>
        </div>
      </li>
    </>
  );
};
