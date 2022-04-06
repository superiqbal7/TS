"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
const array = [2, 4, 1, 5, 3];
const stringData = 'xAbacD';
// const numbersCollection = new NumbersCollection(array);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection)
const charactersCollection = new CharactersCollection_1.CharactersCollection(stringData);
const sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
