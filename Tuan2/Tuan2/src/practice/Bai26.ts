
import { wait } from "./utils";

async function bai26(): Promise<void> {
  console.log("Bắt đầu chờ 5 giây...");
  await wait(5000);
  console.log("Đã chờ xong 5 giây");
}

// ----- Chạy thử -----
bai26();
