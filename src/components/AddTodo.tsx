import { useState, type ChangeEvent, type FormEvent } from "react";
import { Todo } from "../models/Todo";

//---------CHILD----------//

type AddTodoProps = {
  addTodo: (t: Todo) => void;
};

// Renders a form to create a new todo. Calls the
// parent-provided addTodo function med submiting the form.
export const AddTodo = ({ addTodo }: AddTodoProps) => {
  // Creates a new Todo object with default empty values
  const [todo, setTodo] = useState<Todo>(new Todo("", "", "", false));

  // Handles input changes for both text fields and checkbox.
  // Updates the corresponding property in the todo state.
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.target.type === "text") {
      // Update task or description based on input id
      setTodo({ ...todo, [e.target.id]: e.target.value });
    }

    if (e.target.id === "priority") {
      // Set prioritystatys to task
      setTodo({ ...todo, [e.target.id]: e.target.value });
    }
  };

  // Handles form submission, Currently prevents default form submit behavior
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(todo);
  };

  console.log(todo);

  return (
    <>
      <form className="grid grid-cols-2" onSubmit={handleSubmit}>
        <label htmlFor="">Task</label>
        <input
          type="text"
          id="task"
          value={todo.task}
          onChange={handleChange}
          className="border px-2 py-1 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
        />

        <label htmlFor="">Description</label>
        <input
          type="text"
          id="description"
          value={todo.description}
          onChange={handleChange}
          className="border px-2 py-1 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
        />

        <label htmlFor="">Prority</label>
        <select id="priority" onChange={handleChange} className="border px-2 py-1 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200">
          <option value="low">Low</option>
          <option value="medium">Middle</option>
          <option value="high">High</option>
        </select>

        <button className="col-start-2">Add task</button>
      </form>
    </>
  );
};
