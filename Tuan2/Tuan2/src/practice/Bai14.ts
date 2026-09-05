

async function bai14(num: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 3);
    }, 1000);
  });
}


bai14(7).then((result) => {
  console.log("Kết quả:", result); // 21
});
