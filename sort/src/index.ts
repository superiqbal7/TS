import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const array = [2, 4, 1, 5, 3];

const numbersCollection = new NumbersCollection(array);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection)
