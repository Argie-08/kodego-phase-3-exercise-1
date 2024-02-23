function checkOdd(even) {
  for (let i = 0; i < even.length; i++) {
    return even[i] / 2 === 1;
  }
}

console.log(checkOdd([2, 4, 6, 8]));
console.log(checkOdd([10, 11, 14, 16]));
