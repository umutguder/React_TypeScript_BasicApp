import NewTodo from "./components/NewTodo";
import MainHeader from "./components/MainHeader";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <MainHeader></MainHeader>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
