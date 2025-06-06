import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TodoApp } from "./components/TodoApp";

function App() {
  return (
    <div className="min-w-[320px] bg-gray-50 min-h-screen font-[Urbanist,_sans-serif]">
      <Header />
      <TodoApp />
      <Footer />
    </div>
  );
}

export default App;
