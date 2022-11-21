import React, { useEffect, useState } from "react";

import Todo from "./Todo";

function AllTodos({ todos, changed, setChanged }) {
  // calculate uncompleted todos

  const [view, setView] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  // filter todos here
  useEffect(() => {
    // filters here

    if (view === "active") {
      setFilteredTodos(todos.filter((todo) => todo.status === false));
    }
    if (view === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.status === true));
    }
  }, [view, changed, todos]);

  //
  const [active, setActive] = useState(null);

  useEffect(() => {
    let allTodos = JSON.parse(localStorage.getItem("todos")) || null;

    let active = 0;
    setActive(0);
    if (allTodos != null) {
      active = allTodos.filter((todo) => todo.status === false);
      setActive(active.length);
    }
  }, [view, changed, todos]);

  const clearCompleted = () => {
    // clear completed
    let allTodos = JSON.parse(localStorage.getItem("todos"));

    let active = allTodos.filter((todo) => todo.status === false);

    // set local stoarge
    localStorage.setItem("todos", JSON.stringify(active));

    // changed
    setChanged(!changed);
  };

  return (
    <React.Fragment>
      <div className="dark:bg-very-dark-desaturated-blue bg-white rounded-lg shadow-2xl">
        {/* todos */}

        {view === "all" ? (
          <React.Fragment>
            {todos.map((todo) => {
              return (
                <Todo
                  changed={changed}
                  setChanged={setChanged}
                  key={todo.id}
                  todo={todo}
                />
              );
            })}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {" "}
            {filteredTodos.map((todo) => {
              return (
                <Todo
                  changed={changed}
                  setChanged={setChanged}
                  key={todo.id}
                  todo={todo}
                />
              );
            })}
          </React.Fragment>
        )}

        {/* summary */}
        <div className="flex flex-row justify-between dark:text-gray-200 text-gray-500 font-extralight text-xs p-5">
          {/* items left */}
          <div className="md:w-1/5">
            <p className="status-filter">{active} items left</p>
          </div>

          {/* filters */}
          <div className="hidden md:block">
            <span
              onClick={() => setView("all")}
              className={
                view === "all" ? "status-filter-active" : "status-filter"
              }
            >
              All
            </span>
            <span
              onClick={() => setView("active")}
              className={
                view === "active" ? "status-filter-active" : "status-filter"
              }
            >
              Active
            </span>
            <span
              onClick={() => setView("completed")}
              className={
                view === "completed" ? "status-filter-active" : "status-filter"
              }
            >
              Completed
            </span>
          </div>

          {/* clear completed */}
          <div className="md:w-1/5">
            <p
              className=" status-filter cursor-pointer"
              onClick={() => clearCompleted()}
            >
              Clear Completed
            </p>
          </div>
        </div>
      </div>
      {/* mobile filters */}
      <div className="block md:hidden my-5 py-5  text-center dark:bg-very-dark-desaturated-blue bg-white rounded-lg shadow-2xl">
        <span
          onClick={() => setView("all")}
          className={view === "all" ? "status-filter-active" : "status-filter"}
        >
          All
        </span>
        <span
          onClick={() => setView("active")}
          className={
            view === "active" ? "status-filter-active" : "status-filter"
          }
        >
          Active
        </span>
        <span
          onClick={() => setView("completed")}
          className={
            view === "completed" ? "status-filter-active" : "status-filter"
          }
        >
          Completed
        </span>
      </div>
    </React.Fragment>
  );
}
export default AllTodos;
