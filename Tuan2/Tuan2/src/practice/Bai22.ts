

import { Todo } from "./utils";

async function bai22(): Promise<void> {
  const ids = [1, 2, 3];

  for (const id of ids) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data: Todo = await response.json();
    console.log(`Todo #${id}:`, data);
  }
}


bai22();
