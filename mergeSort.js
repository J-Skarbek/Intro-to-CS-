const Arr = [
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

function mergeSort() {
  // Arr.sort(compareNumbers);
  const compareNumbers = (a, b) => a - b;

  // if (Arr.length < 2) {
  //   console.log(Arr);
  //   return;
  // } else {

  // }

  return Arr.sort(compareNumbers);
}