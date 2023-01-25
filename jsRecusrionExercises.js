const testArray = [
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

const sampleObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            number: 44,
            something: 'Sample string'
          }
        }
      }
    }
  }
};

function sumRange(x) {
  if (x == 1) {
    return 1;
  }
  return x + (sumRange(x -1))
}

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

function factorial(x) {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

function productOfArray(array) {
  return (array.length === 0) ? 0 : array[0] + productOfArray(array.slice(1));
}

function contains(object, searchValue) {
  for (const property in object) {
    if (typeof object[property] === 'object') {
      return contains(object[property], searchValue);
    };
    if (object[property] === searchValue) return true;
  }
  return false;
}