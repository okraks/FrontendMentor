import React, { useEffect, useState } from "react";

import check from "../img/icon-check.svg";

function NewTodo({ todos, setChanged, changed }) {
  let status = false;
  const [todo, setTodo] = useState("");

  const addNewTodo = () => {
    // adding new todo
    let newTodo = {
      status: false,
      name: todo,
      id: Math.floor(Math.random() * 10000),
    };

    // append to already existing list
    let current = JSON.parse(localStorage.getItem("todos")) || [];

    current.push(newTodo);

    // add current to localstorage
    localStorage.setItem("todos", JSON.stringify(current));
    setChanged(!changed);

    // clear state
    setTodo("");
  };
  return (
    <div className="mt-5 mb-8 w-full dark:bg-very-dark-desaturated-blue p-5 rounded-lg bg-white">
      <div className="flex flex-row ">
        <div className="mr-5 cursor-pointer">
          {status ? (
            <div className="todo-checkbox-completed">
              <img className="mx-auto mt-2" src={check} alt="check" />
            </div>
          ) : (
            <div className="todo-checkbox"></div>
          )}
        </div>
        <form
          className="w-full"
          onSubmit={(e) => {
            e.preventDefault();
            addNewTodo();
          }}
        >
          <input
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            className="w-full dark:text-very-light-grayish-blue text-very-dark-grayish-blue dark:bg-very-dark-desaturated-blue bg-white new-form"
            type="text"
          />
        </form>
      </div>
    </div>
  );
}

export default NewTodo;
