import type { ChangeEvent } from "react";

type SortTodosProps = {
  sortOption: string;
  setSortOption: (option: string) => void;
};

export const SortTodos = ({ sortOption, setSortOption }: SortTodosProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  return (
    <>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleChange} value={sortOption}>
        <option value="default">Default</option>
        <option value="completed">Status</option>
        <option value="priority">Priority</option>
        <option value="task">Alpabetical</option>
      </select>
    </>
  );
};
