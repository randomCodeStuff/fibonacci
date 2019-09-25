function binet(n) {
  let fib = Array(100).fill(0);
  const denom = 2.23606797749979;
  //const denom = [2, 2, 3, 6, 0, 6, 7, 9, 7, 7, 4, 9, 9, 7, 9]; //2.23606797749979
  //const denom = [9, 7, 9, 9, 4, 7, 7, 9, 7, 6, 0, 6, 3, 2, 2];
  //const phi1 = [1, 6, 1, 8, 0, 3, 3, 9, 8, 8, 7, 4, 9, 8, 9]; //1.61803398874989
  const p1 = [9, 8, 9, 4, 7, 8, 8, 9, 3, 3, 0, 8, 1, 6, 1];
  //const phi2 = [0, -6, -1, -8, 0, -3, -3, -9, -8, -8, -7, -4, -9, -8, -9]; //-0.61803398874989
  const p2 = [-9, -8, -8, -4, -7, -8, -8, -9, -3, -3, 0, -8, -1, -6, 0];
  console.log(fib);
  p1.map((m, index) => {
    fib[index] += m * n;
  });
  p2.map((m, index) => {
    fib[index] -= m * n;
  });
  const reducer = (acc, currV) => acc + currV;
  let sum = fib.reduce(reducer);
  return sum / denom;
}

// function arrayify(n){
//     let arr=[0,0,0,0,0,0,0,0,0,0,0]
//     while(n>0){

//         n=n-10

//     }
// }

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

function arrayifyAdd(...args) {
  //use arrays to add large numbers
  let arr = Array(100).fill(0);
  args.forEach(arg => {
    let arrArg = arg
      .toString()
      .split('')
      .reverse();
    arrArg.forEach((subArg, index) => {
      let wholeValue = arr[index] + Number(subArg);
      arr[index] = wholeValue % 10;
      wholeValue = (wholeValue - arr[index]) / 10;
      while (wholeValue > 0) {
        index += 1;
        arr[index] = (wholeValue % 10) + Number(arr[index]);
        wholeValue = -(wholeValue % 10) - Number(arr[index]);
      }
    });
  });
  return Number(arr.reverse().join(''));
}

//0 1 1 2 3 5 8
//console.log(binet(7));
console.log(arrayifyAdd(1000999, 999, 999));
