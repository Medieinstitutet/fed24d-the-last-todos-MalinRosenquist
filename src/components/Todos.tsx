import { useState } from "react";
import { Todo } from "../models/Todo";

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Plantera tomater", "Sätt tomatplantor i växthuset", false),
    new Todo("Vattna blommor", "Vattna blomrabatten på framsidan", true),
    new Todo("Rensa ogräs", "Rensa ogräs mellan odlingslådorna", false),
    new Todo("Gödsla grönsakslandet", "Använd kompostjord och kogödsel", false),
    new Todo("Beskär äppelträdet", "Ta bort döda grenar och forma kronan", true),
  ]);
  console.log(todos);
  return (
    <>
      <p>{JSON.stringify(todos)}</p>
    </>
  );
};
