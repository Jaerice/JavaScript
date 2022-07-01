function add(a, b) {
  //   return a + b;
}
const result = add(1, 2);
console.log(result); // undefined

// return positive number
// don't return negative number
function print(num) {
  if (num < 0) {
    return;
  }
  return num;
}

console.log(print(10));
