const add = (a: number, b: number): number => {
  return a + b;
}

const subtract = (a: number, b: number) => { //return type inference
  return a - b;
}

//Void & Never

//Return type void when we don't return any value

const logger = (message: string): void => {
  console.log(message);
}

//Return type never when we don't execute the function completely'

const throwError = (message: string): never => {
  throw new Error(message);
}

const throwError2 = (message: string): void => {
  if(!message) throw new Error(message);
}
