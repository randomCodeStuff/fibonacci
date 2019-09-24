function binet(n) {
  return n;
}

function isItAFibNum(n) {
  //return true or false if it is a fib number
  let check1 = 5 * n * n + 4;
  let check2 = 5 * n * n - 4;
  if (
    Number.isInteger(Math.sqrt(check1)) ||
    Number.isInteger(Math.sqrt(check2))
  ) {
    return true;
  }
  return false;
}

console.log(isItAFibNum(8));
