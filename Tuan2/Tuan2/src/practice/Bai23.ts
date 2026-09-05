

import { Todo } from "./utils";

async function bai23(): Promise<Todo[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  const todos: Todo[] = await response.json();
  const notCompleted = todos.filter((todo) => !todo.completed);
  return notCompleted;
}


bai23().then((result) => {
  console.log("Todos chưa hoàn thành:", result);
});
