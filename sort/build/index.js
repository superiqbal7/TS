"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const array = [2, 4, 1, 5, 3];
const numbersCollection = new NumbersCollection_1.NumbersCollection(array);
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
