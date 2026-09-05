/**
 * BÀI 6: Dùng Promise.all() để chạy song song 3 Promise mô phỏng và in kết quả
 */

import { simulateTask } from "./utils";

const p1 = simulateTask(1000);
const p2 = simulateTask(2000);
const p3 = simulateTask(1500);

// ----- Chạy thử và in kết quả ra console -----
Promise.all([p1, p2, p3]).then((results) => {
  console.log("Kết quả Promise.all:", results);
});
