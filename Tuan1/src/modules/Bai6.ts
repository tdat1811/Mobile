class Book {
  title: string;
  author: string;
  year: number;
  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  displayInfo(): void {
    console.log(
      `Title : ${this.title} , Author : ${this.author} , Year : ${this.year}`,
    );
  }
}

const book = new Book("TommyTeo", "Tien Dat", 2023);
book.displayInfo();
