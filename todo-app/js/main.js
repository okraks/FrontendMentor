const addForm = document.querySelector(".new-todo-form");

const list = document.querySelector(".todos-ul");

// function to add new todo html
const generateTemplate = (todo) => {
  let html = ``;
  let completed = "completed";
  if (todo.status) {
    html = `
      <li  class=${("completed", todo.id)} key=${todo.id}>
        <div>
          <input class="status" value=${
            todo.status
          } type="checkbox" id="todo-checkbox" />
          <span> ${todo.name} </span>
        </div>
        <div>
          <img
            class="delete"
            src="./images/icon-cross.svg"
            alt="complete" />
         </div>
      </li>
  `;
  } else {
    html = `
      <li class=${todo.id} key=${todo.id}>
        <div>
          <input class="status" value=${todo.status} type="checkbox" id="todo-checkbox" />
          <span> ${todo.name} </span>
        </div>
        <div>
          <img
            class="delete"
            src="./images/icon-cross.svg"
            alt="complete" />
         </div>
      </li>
  `;
  }
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  // no empty todos allowed
  if (todo.length) {
    if (storedTodos) {
      // get all todos in local storage and append new todo
      let allTodos = JSON.parse(localStorage.getItem("todos"));
      let newTodo = {
        id: Math.floor(Math.random() * 10000),
        name: todo,
        status: true,
      };
      allTodos.push(newTodo);
      // generate template and add to html
      generateTemplate(newTodo);
      // add to LS
      localStorage.setItem("todos", JSON.stringify(allTodos));
    } else {
      // add first todo to locaal storage
      let newTodo = {
        id: Math.floor(Math.random() * 10000),
        name: todo,
        status: false,
      };
      // generate template and add to html
      generateTemplate(newTodo);
      localStorage.setItem("todos", JSON.stringify([newTodo]));
    }

    // reset all input fields inside form
    addForm.reset();
  }
});

// deleting todos using event delegation
list.addEventListener("click", (e) => {
  // Deleting
  if (e.target.classList.contains("delete")) {
    let todo = e.target.parentElement.parentElement;
    todo.remove();

    // get id using classes value of li tag
    let id = todo.classList.value;

    // get localStorage Items
    const allTodos = JSON.parse(localStorage.getItem("todos"));

    // search through local storage and delete id
    let newTodos = allTodos.filter((todo) => todo.id != id);

    // set new todos in localstorage
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  // changing status
  if (e.target.classList.contains("status")) {
    let todo = e.target.parentElement.parentElement;

    // get id using classes value of li tag
    let id = todo.classList.value;

    // add class to todo
    todo.classList.toggle("completed");

    // store new state in local storage
    const allTodos = JSON.parse(localStorage.getItem("todos"));
    allTodos.forEach((todo) => {});
  }
});

// check if there are todos in localstorage and render them to the ul
const storedTodos = localStorage.getItem("todos");

if (storedTodos) {
  console.log("found stored todos");
  // loop over all todos and add to dom
  let todos = JSON.parse(storedTodos);
  todos.forEach(function (todo) {
    const html = `
      <li class=${("completed", todo.id)} key=${todo.id}>
        <div>
          <input class="status" value=${
            todo.status
          } type="checkbox" id="todo-checkbox" />
          <span> ${todo.name} </span>
        </div>
        <div>
          <img
            class="delete"
            src="./images/icon-cross.svg"
            alt="complete" />
         </div>
      </li>
  `;

    list.innerHTML += html;
  });
}
