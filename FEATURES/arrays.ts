//--type inference--
const carMakers = ['ford', 'toyota'];
const dates = [new Date(), new Date()];

//--type annotation--
const carsByMakers: string[][] = []

//--Help with inference when extracting values array--//
const car = carMakers[0]; //car type 'string' coming from type inference
const myCar = carMakers.pop();

//--Prevent incompatible  values inserting in array--//
//carMakers.push(100); //number can't be pushed in string typed array

//--Help with 'map'--//
carMakers.map((car: string): string => {
  return car.toUpperCase();
})

//--Flexible types--//
const importantDays: (Date | string)[] = [];
importantDays.push(new Date());
importantDays.push('14-4-2022');
//importantDays.push(100) //creates error when trying to push number
