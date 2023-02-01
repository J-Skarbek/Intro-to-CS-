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
  this.testing = () => console.log('hello bob.')

  return {
    name,
    data,
    left,
    right,
    testing
  }
}

const BinarySearchTree = (array) => {
  // if (typeof array !== []) return new Error('You must pass an array for this function to work.');
  function _midPoint(array) {
    if (array.length % 2 === 0) {
      const mid = array.length / 2;
      return mid;
    } else if (array.length % 2 !== 0 ) {
      const mid = Math.floor(array.length / 2 + 1);
      return mid;
    };
  }
  
  function mergeSort() {
    if (array <= 1) return array;
    // const midPoint = Math.floor(array.length / 2);
    const leftArray = array.slice(0, _midPoint(array));
    const rightArray = array.slice(_midPoint(array));

    return _merge(
      mergeSort(leftArray), mergeSort(rightArray)
    );
  }

  function _merge(leftArray, rightArray) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        resultArray.push(leftArray[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(rightArray[rightIndex]);
        rightIndex++;
      }
    }
    return resultArray
            .concat(leftArray.slice(leftIndex))
            .concat(rightArray.slice(rightIndex));

  }

  function displayArray() {
    console.log(array.length);
    console.table(array);
  }

  return {
    mergeSort,
    displayArray,
  }
}