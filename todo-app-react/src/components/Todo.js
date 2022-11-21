import React from "react";

import Ex from "../img/icon-cross.svg";
import check from "../img/icon-check.svg";

function Todo({ todo }) {
  return (
    <div>
      <div className="flex flex-row justify-between p-5">
        <div className="flex flex-row ">
          <div className="mr-5 cursor-pointer">
            {todo.status ? (
              <div className="todo-checkbox-completed">
                <img className="mx-auto mt-2" src={check} alt="check" />
              </div>
            ) : (
              <div className="todo-checkbox"></div>
            )}
          </div>

          <p className={todo.status ? "completed-todo" : "uncompleted-todo"}>
            {todo.name}
          </p>
        </div>
        <div>
          <img className="cursor-pointer" src={Ex} alt="cross" />
        </div>
      </div>
      <hr className="todo-line" />
    </div>
  );
}

export default Todo;
