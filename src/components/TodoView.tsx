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
    high: "text-red-600 font-extrabold",
    medium: "text-orange-500 font-bold",
    low: "text-yellow-700 font-semibold",
  };

  console.log("Priority value:", todo.priority);
  return (
    <>
      <li key={todo.id}>
        <div
          className={`border-2 rounded-l-4xl p-3 shadow-xl flex flex-col items-start space-y-2 hover:scale-105 transition, duration-400 
            ${todo.completed ? "border-green-600 bg-[#8CF298]/30" : "border-gray-400"}`}
        >
          <h3 className="text-xl">{todo.title}</h3>
          <div className="flex">
            <p className="mr-2">Priority:</p>
            <span className={`${priorityClasses[todo.priority]}`}>{todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}</span>
          </div>
          <p className="text-left">{todo.description}</p>
          <p className={`${todo.completed ? "font-semibold" : "italic"}`}>{todo.completed ? "Completed" : "Not completed"}</p>

          <div className="w-full flex justify-center gap-x-3 p-3">
            <button className="btn bg-[#14612E] hover:bg-[#197638] transition" onClick={() => toggleCompleted(todo.id)}>
              {todo.completed ? "Undo" : "Done"}
            </button>
            <button className="btn bg-[#9E3515] hover:bg-[#BE3F19] transition" onClick={() => removeTodo(todo.id)}>
              Delete
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
