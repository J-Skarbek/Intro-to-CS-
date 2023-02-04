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

  let sortedArray = mergeSort(array).sortedArray;
  let sortedMidPoint = mergeSort(array).midPoint;


  //runs a mergesort and retruns the base root node from the the now-sorted array
  function _createRoot() {
    this.root = Node(sortedArray[sortedMidPoint]);
    return this.root;
  }

  //helper function used by the mergeSort() method
  // function _midPoint(array) {
  //   if (array.length % 2 === 0) {
  //     const mid = array.length / 2;
  //     return mid;
  //   } else if (array.length % 2 !== 0 ) {
  //     const mid = Math.floor(array.length / 2 + 1);
  //     return mid;
  //   };
  // }

  //helper function used by the mergeSort() method
  // function _merge(lArray, rArray) {
  //   let resultArray = [];
  //   let leftIndex = 0;
  //   let rightIndex = 0;

  //   while (leftIndex < lArray.length && rightIndex < rArray.length) {
  //     if (lArray[leftIndex] < rArray[rightIndex]) {
  //       resultArray.push(lArray[leftIndex]);
  //       leftIndex++;
  //     } else {
  //       resultArray.push(rArray[rightIndex]);
  //       rightIndex++;
  //     };
  //   };
  //   return resultArray
  //           .concat(lArray.slice(leftIndex))
  //           .concat(rArray.slice(rightIndex));
  // }

  // function displayArray() {
  //   console.log(array.length);
  //   console.table(array);
  // }

  //Performs a mergesort on the input array and is called by the createRoot() method
  // function _mergeSortArray(array) {
  //   if (array.length <= 1) return array;
  //   const leftArray = array.slice(0, _midPoint(array));
  //   const rightArray = array.slice(_midPoint(array));
  //   // console.log(`left array: ${leftArray} --- right array: ${rightArray}`);

  //   return _merge(
  //     _mergeSortArray(leftArray), _mergeSortArray(rightArray)
  //   );
  // }

  //Method allows the call of the new, merged/sorted array without a parameter
  // function mergeSort() {
  //   return this._mergeSortArray(this.array);
  // }

   //runs a mergesort and retruns the base root node from the the now-sorted array
  // function _createRoot(sortedArray) {
  //   if (sortedArray !== null);
  //   this.root = Node(sortedMidPoint);
    // return root;
  // }
  

  // function buildTree(tArray, start, end) {
  //   if (start > end) return null;
  //   let mid = _midPoint(tArray);
  //   let node2 = this.root;
  //   node2.left = 111;
  //   node2.right = 222;
  //   console.log(node2);
  //   // node2.left = buildTree(tArray, 0, mid -= 1);
  //   return node2;

    // console.log(mid);
  //   let node = Node(tArray[_midPoint(tArray)]);
  //   console.log(node);
  //   console.log(mid);
  //   node.left = buildTree(tArray, start, mid -= 1);
  //   node.right = buildTree(tArray, mid += 1, end);
  //   console.log(node);
  //   console.log(node.right)
  //   console.log(node.left)
  //   return node.name;
  // }

  // function inOrder(root) {
  //   const nodes = [];
  //   if (root) {
  //     console.log(`left side: ${root.left} right side: ${root.right}`);
  //     inOrder(root.left);
  //     nodes.push(root.val);
  //     inOrder(root.right)
  //   }
  //   return nodes
  // }

  // function displayNodes(node) {
  //   if (node === null) return;
  //   console.log(node);
  //   displayNodes(node.left);
  //   console.log(node.left);
  //   displayNodes(node.right);
  //   console.log(node.left);
  // }

  // function displayArray() {
  //   console.log(array.length);
  //   console.table(array);
  // }

  root = _createRoot(sortedArray);

  return {
    // mergeSort,
    // displayArray,
    // _midPoint,
    // _merge,
    // _createRoot,
    root,
    array,
    root,
    sortedArray,
    sortedMidPoint,
    // buildTree,
    // displayNodes,
    // _mergeSortArray,
    // inOrder,
  }
}