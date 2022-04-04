interface Vehicle {
  name: string,
  year: Date, 
  broken: boolean,
  summary(): string
};

const oldCivic = {
  name: 'oldCivic',
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name: ${this.name}`
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
