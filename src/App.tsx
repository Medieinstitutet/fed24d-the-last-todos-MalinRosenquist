import { TodoApp } from "./components/TodoApp";

function App() {
  return (
    <div className="p-8 min-w-[320px] bg-gray-50 min-h-screen font-[Urbanist,_sans-serif]">
      <h1 className="font-[Happy_Monkey,_sans-serif] text-6xl text-center mb-6">Easy 2 do</h1>
      <TodoApp />
    </div>
  );
}

export default App;
