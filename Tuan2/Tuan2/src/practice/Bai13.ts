
function taskThatFails(): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Something went wrong")), 1000);
  });
}

async function bai13(): Promise<void> {
  try {
    await taskThatFails();
  } catch (error) {
    console.error("Bắt được lỗi:", (error as Error).message);
  }
}


bai13();
