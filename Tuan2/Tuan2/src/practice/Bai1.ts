
function bai1(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello Wolrd");
    }, 2000);
  });
}


bai1().then((result) => {
  console.log(result);
});
