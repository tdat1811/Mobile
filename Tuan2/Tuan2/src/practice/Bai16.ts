

import { simulateTask } from "./utils";

async function bai16(): Promise<void> {
  console.log("Bắt đầu song song...");

  const [result1, result2, result3] = await Promise.all([
    simulateTask(500),
    simulateTask(500),
    simulateTask(500),
  ]);

  console.log("Kết quả:", result1, result2, result3);
  console.log("Hoàn tất song song (chỉ mất khoảng 500ms)");
}

// ----- Chạy thử -----
bai16();
