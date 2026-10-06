const todoList = JSON.parse(localStorage.getItem('todoList')) || {};

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = 
    `<div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
    " class="delete-todo-button">Delete</button>`;
    todoListHTML += html;
  }

  // console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  const obj = {
    name, 
    dueDate
  };
  todoList.push(obj);
  // console.log(todoList);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  inputElement.value = '';
  renderTodoList();
}
