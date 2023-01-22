function fibonaccciIterative(n) {
  const values = [0, 1];
  const sumTwoPriorNums = () => Number(values.slice(-1)) + Number(values.slice(-2, -1));

  while (n > 2) {
    values.push(sumTwoPriorNums());
    n -= 1;
  }

  return values;
};

function fibonaccciRecursive(n) {
  const values = [0, 1];
  const sumTwoPriorNums = () => Number(values.slice(-1)) + Number(values.slice(-2, -1));

  const recursion = () => {
    if ( n < 2) {
      return values;
    }
    values.push(sumTwoPriorNums());
    recursion(n -= 1);
    return values;
  };
  return recursion();
};

