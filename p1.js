function palindrome(str) {
  let x = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let y = x.split("").reverse().join("");
  if (x === y) {
    return "String is a palindrome";
  } else {
    return "uwu";
  }
}
console.log(palindrome("lived devil"));
