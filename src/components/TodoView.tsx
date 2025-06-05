import type { Todo } from "../models/Todo";
import { Button } from "./Button";

type TodoViewProps = {
  todo: Todo;
  toggleCompleted: (id: number) => void;
  removeTodo: (id: number) => void;
};

export const TodoView = ({ todo, toggleCompleted, removeTodo }: TodoViewProps) => {
  // Set classname based on todo priority
  const priorityClasses = {
    high: "text-red-600 font-extrabold",
    medium: "text-orange-500 font-bold",
    low: "text-blue-700 font-semibold",
  };

  return (
    <>
      <li key={todo.id}>
        <div
          className={`border-2 rounded-l-4xl p-4 shadow-lg flex flex-col items-start space-y-2 hover:scale-105 transition, duration-400 
            ${todo.completed ? "border-green-600 bg-[#8CF298]/30" : "border-gray-400 bg-white"}`}
        >
          <h3 className="text-xl font-semibold">{todo.title}</h3>

          {/* Description */}
          <div>
            <span className="mr-2">Task:</span>
            <p className="text-left">{todo.description}</p>
          </div>

          {/* Priority */}
          <div className="flex">
            <span className="mr-2">Priority:</span>
            <span className={`${priorityClasses[todo.priority]}`}>{todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}</span>
          </div>

          {/* Status */}
          <div className="flex">
            <span className="mr-2">Status:</span>
            <p className={`${todo.completed ? "font-semibold" : "italic"}`}>{todo.completed ? "Completed" : "Not completed"}</p>
          </div>

          {/* Buttons */}
          <div className="w-full flex justify-center gap-x-3 p-3">
            <Button className="btn bg-[#14612E] hover:bg-[#197638] transition" onClick={() => toggleCompleted(todo.id)}>
              {todo.completed ? "Undo" : "Done"}
            </Button>
            <Button className="btn bg-[#9E3515] hover:bg-[#BE3F19] transition" onClick={() => removeTodo(todo.id)}>
              Delete
            </Button>
          </div>
        </div>
      </li>
    </>
  );
};
