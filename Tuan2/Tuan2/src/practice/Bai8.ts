
Promise.resolve(2)
  .then((num) => num * num) 
  .then((num) => num * 2)   
  .then((num) => num + 5)   
  .then((result) => {
    console.log("Kết quả chuỗi Promise:", result);
  });
