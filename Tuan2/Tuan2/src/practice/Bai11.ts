
function delayHello(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello Async"), 2000);
  });
}

async function bai11(): Promise<void> {
  const result = await delayHello();
  console.log(result);
}


bai11();
