const arr = [
  41, 
  42, 
  89, 
  71, 
  7, 
  92, 
  24, 
  88, 
  65, 
  88, 
  100, 
  57,
  30, 
  2, 
  10, 
  70, 
  63, 
  26, 
  57, 
  94,
  40, 
  36, 
  61, 
  1, 
  58
];

const midPoint = array => {
  if (array.length % 2 === 0) {
    const mid = array.length / 2;
    return mid;
  } else if (array.length % 2 !== 0 ) {
    const mid = Math.floor(array.length / 2 + 1);
    return mid;
  };
}


function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const leftArray = array.slice(0, midPoint(array));
  const rightArray = array.slice(midPoint(array));
  return merge(
    mergeSort(leftArray), mergeSort(rightArray)
  );
}

function merge(leftArray, rightArray) {
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
  };
  return resultArray
          .concat(leftArray.slice(leftIndex))
          .concat(rightArray.slice(rightIndex));
}
