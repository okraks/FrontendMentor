import React from "react";

import Todo from "./Todo";

function AllTodos() {
  let todos = [
    { id: 1, name: "Buy eggs", status: true },
    { id: 2, name: "Jog around park", status: false },
    { id: 3, name: "Do homework", status: true },
    { id: 4, name: "15 min call with Rick", status: false },
  ];
  return (
    <div className="dark:bg-very-dark-desaturated-blue bg-white rounded-lg">
      {/* todos */}
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
      {/* summary */}
      <div className="flex flex-row justify-between dark:text-gray-200 text-gray-500 font-extralight text-xs p-5">
        {/* items left */}
        <div className="w-1/5">
          <p>{todos.length} items left</p>
        </div>

        {/* filters */}
        <div className="flex flex-row justify-between w-2/5">
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
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
