function multiplyString(txt, num) {
  let ans = "";
  for (let i = 0; i < num; i++) {
    ans += txt;
  }
  return ans;
}
console.log(multiplyString("Hello", 4));
console.log(multiplyString("Hello", 0));
