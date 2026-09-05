
Promise.resolve(2)
  .then((num) => num * num) // bình phương -> 4
  .then((num) => num * 2)   // nhân đôi -> 8
  .then((num) => num + 5)   // cộng 5 -> 13
  .then((result) => {
    console.log("Kết quả chuỗi Promise:", result);
  });
