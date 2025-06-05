import type { ChangeEvent } from "react";

type SortTodosProps = {
  sortOption: string;
  setSortOption: (option: string) => void;
};

export const SortTodos = ({ sortOption, setSortOption }: SortTodosProps) => {
  // Handles changes on the sorting dropdown
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  return (
    <>
      <div className="">
        <label htmlFor="sort" className="mr-2">
          Sort by:
        </label>
        <select id="sort" onChange={handleChange} value={sortOption} className="border-2  bg-blue-50 border-gray-300 rounded-md">
          <option value="default">Default</option>
          <option value="notCompleted">Status: Not done - Completed</option>
          <option value="completed">Status: Completed - Not done</option>
          <option value="priorityLow">Priority: Low - High</option>
          <option value="priorityHigh">Priority: High - Low</option>
          <option value="title">Title: A-Z</option>
        </select>
      </div>
    </>
  );
};
