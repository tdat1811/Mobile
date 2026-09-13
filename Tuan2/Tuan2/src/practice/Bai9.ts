
function bai9(): Promise<number[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const evenNumbers = arr.filter((n) => n % 2 === 0);
      resolve(evenNumbers);
    }, 1000);
  });
}


bai9().then((result) => {
  console.log("Các số chẵn:", result);
});
