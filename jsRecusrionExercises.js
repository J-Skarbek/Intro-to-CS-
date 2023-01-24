function sumRange(x) {
  if (x == 1) {
    return 1;
  }
  return x + (sumRange(x -1))
}

function power(base, exponent) {
  if (exponent === 0) {
    return base;
  }
  return base ** exponent;
}