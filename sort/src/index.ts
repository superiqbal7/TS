import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const array = [2, 4, 1, 5, 3];
const stringData = 'xAbacD';

// const numbersCollection = new NumbersCollection(array);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection)

// const charactersCollection = new CharactersCollection(stringData);
// const sorter = new Sorter(charactersCollection)
// sorter.sort();
// console.log(charactersCollection.data);

const linkedlist = new LinkedList();
linkedlist.add(10);
linkedlist.add(-1);
linkedlist.add(24);

const sorter = new Sorter(linkedlist);
sorter.sort();
linkedlist.print();
