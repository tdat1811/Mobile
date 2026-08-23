abstract class Appliance {
  abstract turnOn(): void;
}
class Fan implements Appliance {
  turnOn(): void {
    console.log("Fan is TurnOn");
  }
}
class Airconditioner implements Appliance {
  turnOn(): void {
    console.log("Air Conditioner is TurnOn");
  }
}
const fan = new Fan();
const airconditioner = new Airconditioner();

fan.turnOn();
airconditioner.turnOn();
