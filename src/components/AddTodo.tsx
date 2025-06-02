import type { FormEvent } from "react";

export const AddTodo = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="grid grid-cols-2" onSubmit={handleSubmit}>
        <label htmlFor="">Task</label>
        <input type="text" id="task" className="border px-2 py-1 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200" />

        <label htmlFor="">Description</label>
        <input type="text" id="descripttion" className="border px-2 py-1 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200" />

        <label htmlFor="">Completed</label>
        <input type="checkbox" id="completed" className="border px-2 py-1 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200" />

        <button className="col-start-2">Add task</button>
      </form>
    </>
  );
};
