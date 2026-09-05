
function bai10(shouldFail: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Task failed"));
      } else {
        resolve("Task succeeded");
      }
    }, 1000);
  });
}

bai10(false)
  .then((result) => console.log("Thành công:", result))
  .catch((err) => console.error("Thất bại:", err.message))
  .finally(() => console.log("Done"));
