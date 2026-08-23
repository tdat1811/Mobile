class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Teacher extends Person {
  constructor(name: string, age: number) {
    super(name, age);
  }
  introduce(): void {
    console.log(`Toi la a ${this.name} nam nay toi ${this.age} `);
  }
}

const teacher1 = new Teacher("Tdat", 21);
teacher1.introduce();
