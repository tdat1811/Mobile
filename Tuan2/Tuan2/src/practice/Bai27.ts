

import { wait, Todo } from "./utils";

async function fetchWithRetry<T>(url: string, retries: number): Promise<T> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error, status: ${response.status}`);
      }
      return (await response.json()) as T;
    } catch (error) {
      console.warn(`Lần thử ${attempt} thất bại:`, error);
      if (attempt === retries) {
        throw new Error(`Gọi API thất bại sau ${retries} lần thử`);
      }
      await wait(1000);
    }
  }
  throw new Error("Không thể lấy dữ liệu");
}

async function bai27(): Promise<void> {
  try {
    const data = await fetchWithRetry<Todo>(
      "https://jsonplaceholder.typicode.com/todos/1",
      3
    );
    console.log("Kết quả:", data);
  } catch (error) {
    console.error("Lỗi cuối cùng:", (error as Error).message);
  }
}


bai27();
