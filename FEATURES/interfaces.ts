// interface Vehicle {
//   name: string,
//   year: Date, 
//   broken: boolean,
//   summary(): string
// };

// const oldCivic = {
//   name: 'oldCivic',
//   year: new Date(),
//   broken: false,
//   summary(): string {
//     return `Name: ${this.name}`
//   }
// };

// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(vehicle.summary());
// };
// printVehicle(oldCivic);

//--Code reuse with Interfaces--//
interface Reportable {
  summary(): string
}

const oldCivic = {
  name: 'oldCivic',
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name: ${this.name}`
  }
};

const drink = {
  name: 'Sprite',
  color: 'clear',
  sugar: 40,
  summary(): string {
    return `Name: ${this.name}`
  }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
