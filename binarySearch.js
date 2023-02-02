const bsArray = [
  1001,
  754,
  222,
  0,
  587,
  11,
  4,
  5,
  88,
  600,
  999,
  555,
  420,
  69,
  111,
  8,
  99,
  876,
  700
];

const Node = (name, data) => {
  this.left = null;
  this.right = null;
  this.testing = () => console.log(`hello, testing name: ${name}`);

  return {
    name,
    data,
    left,
    right,
    testing
  }
}

const BinarySearchTree = (arrayName) => {
  // if (typeof array !== []) return new Error('You must pass an array for this function to work.');
  const array = arrayName;

  let root = null;

  function _midPoint(array) {
    if (array.length % 2 === 0) {
      const mid = array.length / 2;
      return mid;
    } else if (array.length % 2 !== 0 ) {
      const mid = Math.floor(array.length / 2 + 1);
      return mid;
    };
  }

  function _merge(lArray, rArray) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < lArray.length && rightIndex < rArray.length) {
      if (lArray[leftIndex] < rArray[rightIndex]) {
        resultArray.push(lArray[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(rArray[rightIndex]);
        rightIndex++;
      }
    };
    return resultArray
            .concat(lArray.slice(leftIndex))
            .concat(rArray.slice(rightIndex));
  }

  function displayArray() {
    console.log(array.length);
    console.table(array);
  }
  
  function mergeSort(array) {
    if (array.length <= 1) return array;
    const leftArray = array.slice(0, _midPoint(array));
    const rightArray = array.slice(_midPoint(array));
    console.log(`left array: ${leftArray} --- right array: ${rightArray}`);

    return _merge(
      mergeSort(leftArray), mergeSort(rightArray)
    );
  }

  function _createRoot() {
    const sortedArray = this.mergeSort(this.array);
    const firstRoot = sortedArray[this._midPoint(sortedArray)];
    console.table(sortedArray);
    return firstRoot;
  }


  function buildTree() {

  }

  function displayArray() {
    console.log(array.length);
    console.table(array);
  }

  return {
    mergeSort,
    displayArray,
    _midPoint,
    _merge,
    _createRoot,
    array,
    root,
    buildTree,
  }
}