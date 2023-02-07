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

const mergeSort = array => {
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

  function _mergeSortArray(array) {
    if (array.length <= 1) return array;
    const leftArray = array.slice(0, _midPoint(array));
    const rightArray = array.slice(_midPoint(array));
    // console.log(`left array: ${leftArray} --- right array: ${rightArray}`);

    return _merge(
      _mergeSortArray(leftArray), _mergeSortArray(rightArray)
    );
  }
  
  const midPoint = _midPoint(array);
  const sortedArray = _mergeSortArray(array);

  return {
    sortedArray,
    midPoint,
  };
}

const BinarySearchTree = (array) => {
  // if (typeof array !== []) return new Error('You must pass an array for this function to work.');

  let root = null;

  const sortedArray = mergeSort(array).sortedArray;
  const sortedMidPoint = mergeSort(array).midPoint;
  const sortedArrayLength = sortedArray.length;

  //runs a mergesort and retruns the base root node from the the now-sorted array
  function _createRoot() {
    this.root = Node(sortedArray[sortedMidPoint]);
    return this.root;
  }

  function find(root, node) {
    //base case, root is null or node is at the root
    if (root === null || root.name === node) return root;
    //the node provided is greater than the root
    if (root.name < node) return find(root.right, node);
    //the node provided is less than the root
    return find(root.left, node);
  }

  function buildTree(treeArray, start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let node = Node(treeArray[mid]);
    node.left = buildTree(treeArray, start, mid - 1);
    node.right = buildTree(treeArray, mid + 1, end);
    return node;
  }

  function preOrder(node) {
    if (node === null) return;
    preOrder(node.left);
    preOrder(node.right);
  }
  
    const output = buildTree(sortedArray, 0, sortedArray.length - 1);
  // const printNodes = preOrder(output);

  return {
    root,
    array,
    root,
    sortedArray,
    sortedMidPoint,
    sortedArrayLength,
    buildTree,
    output,
    find,
    preOrder,
    // printNodes,
    _createRoot,
  }
}