

import { simulateTask } from "./utils";

const p1 = simulateTask(3000);
const p2 = simulateTask(1000); 
const p3 = simulateTask(2000);

// ----- Chạy thử và in kết quả ra console -----
Promise.race([p1, p2, p3]).then((result) => {
  console.log("Kết quả Promise.race (nhanh nhất):", result);
});
