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

const midPoint = () => {
  if (arr.length % 2 === 0) {
    const mid = arr.length / 2;
    return mid;
  } else if (arr.length % 2 !== 0 ) {
    const mid = Math.floor(arr.length / 2 + 1);
    return mid;
  };
};

// const leftArray = arr.slice(0, mid)
// const rightArray = arr.slice(mid)

const compareNumbers = (a, b) => a - b;

function mergeSort() {
  if (arr.length < 2) {
    arr.sort(compareNumbers);
    console.log(arr);
    return;
  } else {
    console.log(midPoint());
    const leftArray = arr.slice(0, midPoint());
    const rightArray = arr.slice(midPoint());
    console.log(leftArray);
    console.log(rightArray);
  }
}
