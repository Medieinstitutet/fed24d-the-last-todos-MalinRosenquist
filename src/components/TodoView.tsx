import type { Todo } from "../models/Todo";

//---------GRANDCHILD----------//
// Single todo

type TodoViewProps = {
  todo: Todo;
  toggleCompleted: (id: number) => void;
  removeTodo: (id: number) => void;
};

export const TodoView = ({ todo, toggleCompleted, removeTodo }: TodoViewProps) => {
  const priorityClasses = {
    high: "text-red-600 font-bold",
    medium: "text-yellow-500 font-semibold",
    low: "text-green-400 font-normal",
  };

  const borderClasses = {
    high: "border-red-500",
    medium: "border-yellow-500",
    low: "border-green-500",
  };

  console.log("Priority value:", todo.priority);
  return (
    <>
      <li key={todo.id}>
        <div>
          <h3>{todo.task}</h3>
          <p>{todo.priority}</p>
        <div className={`border-2 rounded-md m-10 p-1 shadow-xl flex flex-col items-start gap-y-1 ${borderClasses[todo.priority]}`}>
          <h3 className="text-xl">{todo.title}</h3>
          <p className={priorityClasses[todo.priority]}>{todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}</p>
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
