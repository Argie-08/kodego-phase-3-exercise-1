function palindrome(str) {
  let x = str.toLowerCase();
  let y = x.split("").reverse().join("");
  if (x === y) {
    return "String is a palindrome";
  } else {
    return "uwu";
  }
}
console.log(palindrome("lived devil"));
console.log(palindrome("game"));
