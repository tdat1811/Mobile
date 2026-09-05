import { simulateTask } from "./utils";


async function bai15(): Promise<void> {
  console.log("Bắt đầu tuần tự...");

  const result1 = await simulateTask(500);
  console.log("Kết quả 1:", result1);

  const result2 = await simulateTask(500);
  console.log("Kết quả 2:", result2);

  const result3 = await simulateTask(500);
  console.log("Kết quả 3:", result3);

  console.log("Hoàn tất tuần tự (mất khoảng 1500ms)");
}


bai15();
