const addForm = document.querySelector(".new-todo-form");

const list = document.querySelector(".todos-ul");

// function to add new todo html
const generateTemplate = (todo) => {
  const html = `
      <li>
        <div>
          <input type="checkbox" id="todo-checkbox" />
          <span> ${todo} </span>
        </div>
        <div>
          <img
            class="delete"
            src="./images/icon-cross.svg"
            alt="complete"
              />
         </div>
      </li>
  `;

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

      allTodos.push({
        name: todo,
        status: false,
      });
      // add to LS
      localStorage.setItem("todos", JSON.stringify(allTodos));
    } else {
      // add first todo to locaal storage
      localStorage.setItem(
        "todos",
        JSON.stringify([{ name: todo, status: false }])
      );
    }
    // generate template and add to html
    generateTemplate(todo);
    // reset all input fields inside form
    addForm.reset();
  }
});

// deleting todos using event delegation
list.addEventListener("click", (e) => {
  // check if we clicked the cross
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
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
      <li>
        <div>
          <input type="checkbox" value=${todo.status} id="todo-checkbox" />
          <span> ${todo.name} </span>
        </div>
        <div>
          <img
            class="delete"
            src="./images/icon-cross.svg"
            alt="complete"
              />
         </div>
      </li>
  `;

    list.innerHTML += html;
  });
}
