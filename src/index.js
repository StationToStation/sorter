class Sorter {
  constructor() {
    this.arr=[];
    this.comparator=function compareNumbers(a,b)
    {
      if (a>b)return 1;
      if (a<b) return -1;
      return 0;
    }
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    let tempArr = [];
    indices.sort();
    for (let i = 0; i < indices.length; i++) {
        tempArr.push(this.arr[indices[i]]);
    }
    tempArr.sort(this.comparator);
    for(let i = 0; i < indices.length; i++) {
        this.arr[indices[i]] = tempArr[i];
    }
  }

 
  setComparator(compareFunction) {
    this.comparator = compareFunction;

  }
}

module.exports = Sorter;
