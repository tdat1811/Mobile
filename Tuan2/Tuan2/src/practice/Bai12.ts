
import { simulateTask } from "./utils";

async function bai12(): Promise<void> {
  const result = await simulateTask(2000);
  console.log(result);
}

// ----- Chạy thử -----
bai12();
