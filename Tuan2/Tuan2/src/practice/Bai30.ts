

async function bai30(): Promise<void> {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/url-khong-ton-tai", // sẽ lỗi
  ];

  const results = await Promise.allSettled(
    urls.map((url) => fetch(url).then((res) => res.json()))
  );

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`URL ${index + 1} thành công:`, result.value);
    } else {
      console.log(`URL ${index + 1} thất bại:`, result.reason);
    }
  });
}

// ----- Chạy thử -----
bai30();
