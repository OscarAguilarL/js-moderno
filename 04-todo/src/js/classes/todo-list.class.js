import { Todo } from './index';

export class TodoList {
  constructor() {
    this.loadLocalStorage();
  }

  newTodo(todo) {
    this.todos.push(todo);
    this.saveLocalStorage();
  }

  deleteTodo(id) {
    id *= 1;
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveLocalStorage();
  }

  completeTodo(id) {
    for (const todo of this.todos) {
      id *= 1;
      if (todo.id === id) {
        todo.completado = !todo.completado;
        this.saveLocalStorage();
        break;
      }
    }
  }

  deleteCompleted() {
    this.todos = this.todos.filter((todo) => todo.completado);
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }

  loadLocalStorage() {
    this.todos = localStorage.getItem('todo')
      ? JSON.parse(localStorage.getItem('todo'))
      : [];

    this.todos = this.todos.map(Todo.fromJson);
  }
}
