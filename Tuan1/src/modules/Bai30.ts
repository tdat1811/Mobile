class Student {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Teacher {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class School {
  students: Student[] = [];
  teachers: Teacher[] = [];

  constructor(students: Student[], teachers: Teacher[]) {
    this.students = students;
    this.teachers = teachers;
  }

  displayInfo(): void {
    console.log("Students:");

    this.students.forEach((student) => {
      console.log(`- ${student.name}`);
    });

    console.log("Teachers:");

    this.teachers.forEach((teacher) => {
      console.log(`- ${teacher.name}`);
    });
  }
}


const students = [
  new Student("Tien Dat"),
  new Student("Long"),
  new Student("Teo")
];

const teachers = [
  new Teacher("Mr. Nam"),
  new Teacher("Ms. Lan")
];

const school = new School(students, teachers);

school.displayInfo();