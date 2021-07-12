import { Todo } from './classes';
import { todoList } from '../index';

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnEliminar = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => {
  const htmlTodo = `
  <li class="${todo.completado ? 'completed' : ''}" data-id="${todo.id}">
    <div class="view">
      <input class="toggle" type="checkbox" ${
        todo.completado ? 'checked' : ''
      } />
      <label>${todo.tarea}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />
  </li>`;

  const div = document.createElement('div');
  div.innerHTML = htmlTodo;
  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
};

// eventos
txtInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    const nuevoTodo = new Todo(txtInput.value);
    todoList.newTodo(nuevoTodo);

    crearTodoHtml(nuevoTodo);

    txtInput.value = '';
  }
});

divTodoList.addEventListener('click', (event) => {
  const nombreElemento = event.target.localName;
  const todoElemento = event.target.parentElement.parentElement;
  const todoId = todoElemento.getAttribute('data-id');

  if (nombreElemento.includes('input')) {
    // click en el checkbox
    todoList.completeTodo(todoId);
    todoElemento.classList.toggle('completed');
  } else if (nombreElemento.includes('button')) {
    todoList.deleteTodo(todoId);
    divTodoList.removeChild(todoElemento);
  }
  // console.log(todoList);
});

btnEliminar.addEventListener('click', () => {
  todoList.deleteCompleted();

  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const element = divTodoList.children[i];

    if (element.classList.contains('completed')) {
      divTodoList.removeChild(element);
    }
  }
});

ulFilters.addEventListener('click', (event) => {
  const filtro = event.target.text;

  if (!filtro) return;

  anchorFilters.forEach((element) => element.classList.remove('selected'));
  event.target.classList.add('selected');

  for (const elem of divTodoList.children) {
    elem.classList.remove('hidden');
    const completed = elem.classList.contains('completed');

    switch (filtro) {
      case 'Pendientes':
        if (completed) {
          elem.classList.add('hidden');
        }
        break;
      case 'Completados':
        if (!completed) {
          elem.classList.add('hidden');
        }
        break;

      default:
        break;
    }
  }
});
