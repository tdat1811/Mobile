
function getRandomNumber(): Promise<number> {
  return new Promise((resolve, reject) => {
    const num = Math.random();
    if (num < 0.1) {
      reject(new Error("Số quá nhỏ, thử lại"));
    } else {
      resolve(num);
    }
  });
}


getRandomNumber()
  .then((num) => {
    console.log("Số ngẫu nhiên:", num);
  })
  .catch((err) => {
    console.error("Lỗi:", err.message);
  });
