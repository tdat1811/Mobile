interface Payment {
  pay(amount: number): void;
}

class CashPayment implements Payment {
  balance: number;
  constructor(balance: number) {
    this.balance = balance;
  }
  pay(amount: number): void {
    if (amount > this.balance) {
      console.log("So du hien tai khong du");
    } else {
      this.balance -= amount;
      console.log(
        `ban vua tra ${amount} tai khoan cua ban con ${this.balance} bang phuong thuc CashPayment`,
      );
    }
  }
}

class CardPayment implements Payment {
  balance: number;
  constructor(balance: number) {
    this.balance = balance;
  }
  pay(amount: number): void {
    if (amount > this.balance) {
      console.log("So du hien tai khong du");
    } else {
      this.balance -= amount;
      console.log(
        `ban vua tra ${amount} tai khoan cua ban con ${this.balance} bang phuong thuc CardPayment`,
      );
    }
  }
}

const cash_payment = new CashPayment(3000);
cash_payment.pay(2000);

const card_payment = new CardPayment(2000);
card_payment.pay(200);
