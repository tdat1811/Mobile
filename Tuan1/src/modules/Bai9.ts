interface Animal {
  name: string;
  sound(): void;
  displayInfo(): void;
}

const dog: Animal = {
  name: "Dog",
  sound: function () {
    console.log("Bark!");
  },
  displayInfo: function () {
    console.log(`Animal: ${this.name}`);
  },
};
dog.displayInfo();
dog.sound();