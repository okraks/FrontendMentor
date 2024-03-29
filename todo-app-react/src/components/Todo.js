import React from "react";

import Ex from "../img/icon-cross.svg";
import check from "../img/icon-check.svg";

function Todo({ todo, changed, setChanged }) {
  const deleteTodo = (id) => {
    // filter todo out of LS
    let todos = JSON.parse(localStorage.getItem("todos"));

    let newTodos = todos.filter((todo) => todo.id != id);

    // add new array to LS
    localStorage.setItem("todos", JSON.stringify(newTodos));

    // trigger change
    setChanged(!changed);
  };

  // change status of todo
  const changeStatus = (id) => {
    // changing status
    let todos = JSON.parse(localStorage.getItem("todos"));

    let newTodos = [];

    // loop through todos, change status of selected one
    todos.forEach((todo) => {
      if (todo.id === id) {
        let changed = {
          id,
          name: todo.name,
          status: !todo.status,
        };
        newTodos.push(changed);
      } else {
        newTodos.push(todo);
      }
    });

    // push new array to LS
    localStorage.setItem("todos", JSON.stringify(newTodos));

    //
    setChanged(!changed);
  };

  return (
    <div>
      <div className="flex flex-row justify-between p-5">
        <div className="flex flex-row ">
          <div
            onClick={() => changeStatus(todo.id)}
            className="mr-5 cursor-pointer"
          >
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
          <img
            onClick={() => deleteTodo(todo.id)}
            className="cursor-pointer"
            src={Ex}
            alt="cross"
          />
        </div>
      </div>
      <hr className="dark:todo-line-dark todo-line" />
    </div>
  );
}

export default Todo;
