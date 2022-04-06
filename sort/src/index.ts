class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for(let i = 0; i < length; i++) {
      for(let j = 0; j < length-i-1; j++) {

        //All of this only works if collection is number[]
        //If collection is an array of numbers
        if(this.collection instanceof Array) {
          if(this.collection[j] > this.collection[j + 1]){
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        //ONly going to work if collection is a string
        //If collection is a string, do this logic instead:
        //--logic to compare and swap characters in string
        if(typeof this.collection === 'string'){

        }
      }
    }
  }
}
const array = [2, 4, 1, 5, 3]
const sorter = new Sorter(array);
sorter.sort();
console.log(sorter.collection)
