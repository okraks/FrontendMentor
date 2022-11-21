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

  return (
    <div className="dark:bg-very-dark-desaturated-blue bg-white rounded-lg">
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
        <div className="w-1/5">
          <p>{todos.length} items left</p>
        </div>

        {/* filters */}
        <div className="flex flex-row justify-between w-2/5 cursor-pointer">
          <p
            onClick={() => setView("all")}
            className={view === "all" ? "text-primary-blue" : null}
          >
            All
          </p>
          <p
            onClick={() => setView("active")}
            className={view === "active" ? "text-primary-blue" : null}
          >
            Active
          </p>
          <p
            onClick={() => setView("completed")}
            className={view === "completed" ? "text-primary-blue" : null}
          >
            Completed
          </p>
        </div>

        {/* clear completed */}
        <div className="w-1/5">
          <p>Clear Completed</p>
        </div>
      </div>
    </div>
  );
}
export default AllTodos;
