"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const array = [2, 4, 1, 5, 3];
const stringData = 'xAbacD';
const numbersCollection = new NumbersCollection_1.NumbersCollection(array);
numbersCollection.sort();
console.log(numbersCollection);
// const numbersCollection = new NumbersCollection(array);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection)
// const charactersCollection = new CharactersCollection(stringData);
// const sorter = new Sorter(charactersCollection)
// sorter.sort();
// console.log(charactersCollection.data);
// const linkedlist = new LinkedList();
// linkedlist.add(10);
// linkedlist.add(-1);
// linkedlist.add(24);
// const sorter = new Sorter(linkedlist);
// sorter.sort();
// linkedlist.print();
