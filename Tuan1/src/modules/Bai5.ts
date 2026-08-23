class BackAccount {
  balance: number;
  constructor(balance: number) {
    this.balance = balance;
  }
  deposit(amount: number): void {
    this.balance += amount;
  }
  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("So tien rut phai lon hon so du hien tai");
    }
  }
}

const account = new BackAccount(1000);
console.log(`So du hien tai : ${account.balance}`);
account.deposit(500);
console.log(`So du hien tai sau khi nap 500 : ${account.balance}`);
account.withdraw(200);
console.log(`So du hien tai sau khi rut 200 : ${account.balance}`);
