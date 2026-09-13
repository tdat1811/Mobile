export function simulateTask(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task done");
    }, time);
  });
}


export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


export interface User {
  id: number;
  name: string;
}


export function fetchUser(id: number): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User ${id}` });
    }, 1000);
  });
}


export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
