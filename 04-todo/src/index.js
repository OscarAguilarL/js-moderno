import './styles.css';

import { TodoList } from './js/classes';
import { crearTodoHtml } from './js/components';

export const todoList = new TodoList();

// todoList.todos.forEach((todo) => {
//   crearTodoHtml(todo);
// });

todoList.todos.forEach(crearTodoHtml);
