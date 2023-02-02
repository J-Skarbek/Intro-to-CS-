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
  };
}

const BinarySearchTree = (arrayName) => {
  // if (typeof array !== []) return new Error('You must pass an array for this function to work.');
  const array = arrayName;

  let root = null;

  //helper function used by the mergeSort() method
  function _midPoint(array) {
    if (array.length % 2 === 0) {
      const mid = array.length / 2;
      return mid;
    } else if (array.length % 2 !== 0 ) {
      const mid = Math.floor(array.length / 2 + 1);
      return mid;
    };
  }

  //helper function used by the mergeSort() method
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
      };
    };
    return resultArray
            .concat(lArray.slice(leftIndex))
            .concat(rArray.slice(rightIndex));
  }

  function displayArray() {
    console.log(array.length);
    console.table(array);
  }

  //Performs a mergesort on the input array and is called by the createRoot() method
  function _mergeSortArray(array) {
    if (array.length <= 1) return array;
    const leftArray = array.slice(0, _midPoint(array));
    const rightArray = array.slice(_midPoint(array));
    // console.log(`left array: ${leftArray} --- right array: ${rightArray}`);

    return _merge(
      _mergeSortArray(leftArray), _mergeSortArray(rightArray)
    );
  }

  //Method allows the call of the new, merged/sorted array without a parameter
  function mergeSort() {
    return this._mergeSortArray(this.array);
  }

  //runs a mergesort and retruns the base root node from the the now-sorted array
  function _createRoot() {
    const newArray = this.mergeSort();
    const root = Node(newArray[this._midPoint(newArray)]);
    return root;
  };

  function buildTree(array, start, end) {
    if (start > end) return null;
    // let sortArr = mergeSort(array);
    let mid = _midPoint(_createRoot().sortedArray);
    let node = this._createRoot;
    // let node = Node(mid);
    node.left = buildTree(array, start, mid - 1);
    node.right = buildTree(array, mid + 1, end)
    return node;
  }

  function runBuildTree() {
    let arrLength = this.array.length;
    this.root = this.buildTree(this.array, 0, arrLength -1);
    displayNodes(this.root);
  }

  function displayNodes(node) {
    if (node === null) return;
    console.log(node);
    displayNodes(node.left);
    console.log(node.left);
    displayNodes(node.right);
    console.log(node.left);
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
    runBuildTree,
    displayNodes,
    _mergeSortArray,
  }
}