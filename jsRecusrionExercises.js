function sumRange(x) {
  if (x == 1) {
    return 1;
  }
  return x + (sumRange(x -1))
}

// function power(base, exponent) {
//   if (exponent === 0) {
//     return 1;
//   }
//   return base ** exponent;
// }

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