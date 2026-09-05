
import { simulateTask } from "./utils";

async function queueProcess(): Promise<string[]> {
  const taskTimes = [500, 700, 300, 900, 400];
  const results: string[] = [];

  for (const time of taskTimes) {
    console.log(`Đang xử lý task với thời gian ${time}ms...`);
    const result = await simulateTask(time);
    results.push(result);
  }

  return results;
}

// ----- Chạy thử và in kết quả ra console -----
queueProcess().then((results) => {
  console.log("Kết quả hàng đợi (tuần tự):", results);
});
