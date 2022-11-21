import React from "react";

import check from "../img/icon-check.svg";

function NewTodo() {
  let status = false;
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

        <input
          className="w-full dark:text-very-light-grayish-blue text-very-dark-grayish-blue dark:bg-very-dark-desaturated-blue bg-white new-form"
          type="text"
        />
      </div>
    </div>
  );
}

export default NewTodo;
