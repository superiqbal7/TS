class Vehicle {
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(public color: string) {}

  protected drive(): void {
    console.log('Broom Broom');
  }

  horn(): void {
    console.log('Peeep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {

  constructor(public wheels: number, public color: string) {
    super(color);
  }

  drive(): void {
    console.log('Vrooooom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.horn();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();

