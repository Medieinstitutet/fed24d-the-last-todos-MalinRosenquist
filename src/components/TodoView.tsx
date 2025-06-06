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
    high: "bg-[#660000] font-extrabold",
    medium: "bg-[#943B00] font-bold",
    low: "bg-[#003366] font-semibold",
  };

  return (
    <>
      <li key={todo.id}>
        <div
          className={`border-2 border-t-6 rounded-br-4xl rounded-bl-4xl p-4 shadow-lg flex flex-col items-start space-y-2 hover:scale-105 transition, duration-400 
            ${todo.completed ? "border-[#006625] bg-[#8CF298]/30" : "border-[#4F5564] bg-white"}`}
        >
          {/* Title */}
          <h3 className="text-xl font-semibold font-[Happy_Monkey,_sans-serif] tracking-wider">{todo.title}</h3>

          {/* Description */}
          <div>
            <span className="mr-2 font-medium">Task description:</span>
            <p className="text-left">{todo.description}</p>
          </div>

          {/* Priority */}
          <div className="flex items-center">
            <span className="mr-2 font-medium">Priority:</span>
            <span className={`text-white rounded-2xl px-4 py-1 ${priorityClasses[todo.priority]}`}>
              {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
            </span>
          </div>

          {/* Status */}
          <div className="flex">
            <span className="mr-2 font-medium">Status:</span>
            <p className={`${todo.completed ? "font-semibold text-green-900" : "italic"}`}>{todo.completed ? "Completed ✔" : "Not completed"}</p>
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
