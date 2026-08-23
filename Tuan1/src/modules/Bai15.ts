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
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  displayInfo(): void {
    console.log(`userName : ${this.name}`);
  }
}
class Library {
  books: Book[] = [];
  users: User[] = [];
  constructor(books: Book[], users: User[]) {
    this.books = books;
    this.users = users;
  }
  addBook(book: Book): void {
    this.books.push(book);
  }
}
const user1 = new User("Tien Dat");

const book2 = new Book("TommyTeo", "Tien Dat", 2023);
const lib1 = new Library([book2], [user1]);
console.log(lib1.books);
lib1.books.forEach((b) => b.displayInfo());

const book1 = new Book("De men phieu luu ki", "Tien Dat", 2025);
lib1.addBook(book1);
console.log("Sau khi them 1 quyen sach");
lib1.books.forEach((b) => b.displayInfo());
