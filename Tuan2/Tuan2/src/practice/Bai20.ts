

import { simulateTask } from "./utils";

function fetchWithTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Timeout sau ${timeoutMs}ms`));
    }, timeoutMs);
  });


  return Promise.race([promise, timeoutPromise]);
}

async function bai20(): Promise<void> {
  try {
    
    const slowApiCall = simulateTask(3000);
    const result = await fetchWithTimeout(slowApiCall, 2000);
    console.log("Kết quả:", result);
  } catch (error) {
    console.error("Lỗi:", (error as Error).message);
  }
}

// ----- Chạy thử -----
bai20();
