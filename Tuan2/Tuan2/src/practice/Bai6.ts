

import { simulateTask } from "./utils";

const p1 = simulateTask(1000);
const p2 = simulateTask(2000);
const p3 = simulateTask(1500);


Promise.all([p1, p2, p3]).then((results) => {
  console.log("Kết quả Promise.all:", results);
});
