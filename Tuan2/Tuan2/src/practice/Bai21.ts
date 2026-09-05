

import { Todo } from "./utils";

async function bai21(): Promise<void> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data: Todo = await response.json();
  console.log("Dữ liệu todo:", data);
}


bai21();
