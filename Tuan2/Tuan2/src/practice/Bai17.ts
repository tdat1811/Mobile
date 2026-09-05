

import { simulateTask } from "./utils";

async function bai17(): Promise<void> {
  const promises = [simulateTask(300), simulateTask(600), simulateTask(900)];

  for await (const result of promises) {
    console.log("Kết quả từng Promise:", result);
  }
}


bai17();
