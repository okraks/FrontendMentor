import React, { useState, useEffect } from "react";

import "./App.css";

import Toggle from "./theme/ThemeToggle";
import AllTodos from "./components/AllTodos";
import NewTodo from "./components/NewTodo";

function App() {
  const [changed, setChanged] = useState(false);
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
  }, [changed]);
  return (
    <div>
      <div className="bg-bgDesktopLight dark:bg-bgDesktopDark h-96 bg-no-repeat"></div>
      <div className="-mt-72 w-full px-5 md:px-0 md:max-w-xl mx-auto">
        <div className="flex flex-row justify-between">
          <h1 className=" text-4xl  text-white dark:text-white tracking-[0.8rem] mb-5">
            TODO
          </h1>
          <Toggle />
        </div>
        {/* add New todo */}
        <NewTodo changed={changed} setChanged={setChanged} todos={todos} />
        {/* display todos */}
        <AllTodos changed={changed} setChanged={setChanged} todos={todos} />
      </div>
    </div>
  );
}

export default App;
