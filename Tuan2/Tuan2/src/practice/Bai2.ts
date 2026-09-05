

function bai2(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}


bai2().then((result) => {
  console.log(result);
});
