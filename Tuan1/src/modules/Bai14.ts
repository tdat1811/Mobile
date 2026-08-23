class Employee {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Manager extends Employee {
  manageTeam(): void {
    console.log(`${this.name} manage the team`);
  }
}

class Dev extends Employee {
  Coding(): void {
    console.log(`${this.name} Coding the project`);
  }
}

const manager1 = new Manager("Tdat");
manager1.manageTeam();

const dev1 = new Dev("Teo");
dev1.Coding();
