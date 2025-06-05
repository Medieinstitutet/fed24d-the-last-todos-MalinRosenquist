import { useState, type ChangeEvent, type FormEvent } from "react";
import { Todo, type Priority } from "../models/Todo";
import { Button } from "./Button";

type AddTodoProps = {
  addTodo: (t: Todo) => void;
};

// Renders a form to create a new todo. Calls the
// parent-provided addTodo function med submiting the form.
export const AddTodo = ({ addTodo }: AddTodoProps) => {
  // Creates a new Todo object with default empty values
  const [todo, setTodo] = useState<Todo>(new Todo("", "low", "", false));

  // Handles input changes for both text fields and checkbox.
  // Updates the corresponding property in the todo state.
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.target.type === "text") {
      // Update task or description based on input id
      setTodo({ ...todo, [e.target.id]: e.target.value });
    }

    if (e.target.id === "priority") {
      // Set priority to task
      setTodo({ ...todo, priority: e.target.value as Priority });
    }
  };

  // Handles form submission, Currently prevents default form submit behavior
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(todo);
    setTodo(new Todo("", "low", "", false));
  };

  return (
    <>
      <form className="bg-white rounded-2xl border-2 border-[#38578A] shadow-xl p-4 hover:outline-1 transition" onSubmit={handleSubmit}>
        <h2 className="text-xl text-center font-[Happy_Monkey,_sans-serif] font-semibold">Add new todo</h2>
        <div className="flex flex-col space-y-4">
          {/* Title */}
          <div className="flex flex-col text-left">
            <label htmlFor="title" className="font-semibold">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={todo.title}
              onChange={handleChange}
              className="border px-2 py-1 bg-blue-50 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          {/* Description */}
          <div className="flex flex-col text-left">
            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <input
              type="text"
              id="description"
              value={todo.description}
              onChange={handleChange}
              className="border px-2 py-1  bg-blue-50 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          {/* Priority */}
          <div className="flex flex-col text-left">
            <label htmlFor="priority" className="font-semibold">
              Priority
            </label>
            <select
              id="priority"
              onChange={handleChange}
              className="border px-2 py-1  bg-blue-50 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Submit button */}
          <Button className="btn bg-[#38578A] hover:bg-[#49699e] mt-3 hover:border-[38578A]">Add task</Button>
        </div>
      </form>
    </>
  );
};
