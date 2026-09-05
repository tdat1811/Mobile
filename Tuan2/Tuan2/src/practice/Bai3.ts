
function bai3(): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong"));
    }, 1000);
  });
}


bai3().catch((error) => {
  console.log("Lỗi:", error.message);
});
