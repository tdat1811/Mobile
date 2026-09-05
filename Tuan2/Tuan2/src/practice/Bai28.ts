

import { simulateTask } from "./utils";

async function batchProcess(): Promise<string[]> {
  const tasks = [
    simulateTask(500),
    simulateTask(700),
    simulateTask(300),
    simulateTask(900),
    simulateTask(400),
  ];

  const results = await Promise.all(tasks);
  return results;
}

// ----- Chạy thử và in kết quả ra console -----
batchProcess().then((results) => {
  console.log("Kết quả batch:", results);
});
