class Account {
  public username: string;
  private password: string;
  readonly email: string;
  constructor(username: string, password: string, email: string) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
  displayInfo(): void {
    console.log(`Username: ${this.username},password : ${this.password}, Email: ${this.email}`);
  }
}
const account1 = new Account("user1", "123", "tiendat20051812@gmail.com");
account1.displayInfo();
