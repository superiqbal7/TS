const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

//type alias
type Drink = [string, boolean, number];

//tuples
const coke: Drink = ['black', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
