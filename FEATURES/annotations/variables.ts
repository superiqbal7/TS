let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = false;

// apples = 'apple' //type error

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumber: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false];

//classes
class Car {

}

const car: Car = new Car();

//Object literal
let point: {x: number; y: number} = {
  x: 10,
  y: 5
  //a: 20 //--type error--//
}

//functions

const sum: (x: number, y: number) => number = (x: number, y: number) => x+y;
const sumValue = sum(5,3);
console.log(sumValue);
