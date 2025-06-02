import type { Todo } from "../models/Todo";

//---------GRANDCHILD----------//
// Single todo

type TodoViewProps = {
  todo: Todo;
};

export const TodoView = ({ todo }: TodoViewProps) => {
  return (
    <>
      <li key={todo.id}>
        <div>
          <h3>{todo.task}</h3>
          <p>{todo.description}</p>
          <p>{todo.completed ? "Completed" : "Not completed"}</p>
          <div>
            <button>Done</button>
            <button>Delete</button>
          </div>
        </div>
      </li>
    </>
  );
};
