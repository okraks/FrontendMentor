import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";

import Toggle from "./theme/ThemeToggle";
import AllTodos from "./components/AllTodos";
import NewTodo from "./components/NewTodo";

function App() {
  return (
    <div>
      <div className="bg-bgDesktopLight dark:bg-bgDesktopDark h-96 bg-no-repeat"></div>
      <div className="-mt-72 max-w-xl mx-auto">
        <div className="flex flex-row justify-between">
          <h1 className=" text-4xl  text-white dark:text-white">TODO</h1>
          <Toggle />
        </div>
        {/* add New todo */}
        <NewTodo />
        {/* display todos */}
        <AllTodos />
      </div>
    </div>
  );
}

export default App;
