

function downloadFile(fileName: string): Promise<void> {
  return new Promise((resolve) => {
    console.log(`Bắt đầu tải file "${fileName}"...`);
    setTimeout(() => {
      console.log(`Đã tải xong file "${fileName}"`);
      resolve();
    }, 3000);
  });
}

// ----- Chạy thử -----
downloadFile("bao_cao.pdf");
