import React from "react";

import Ex from "../img/icon-cross.svg";

function Todo({ todo }) {
  return (
    <div className="">
      <div className="flex flex-row justify-between p-5">
        <div className="flex flex-row ">
          <div className="mr-5">O</div>
          <p className="dark:text-very-light-gray text-very-dark-desaturated-blue ">
            {todo.name}
          </p>
        </div>
        <div>
          <img src={Ex} alt="cross" />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Todo;
