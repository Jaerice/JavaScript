// Logical operator
// && and
// || or
// !
// !! boolean
let num = 8;
if (num >= 0 && num > 20) {
  console.log('good');
}
if (num >= 0 || num > 20) {
  console.log('good');
}
if (!(num >= 0 || num > 20)) {
  console.log('good');
}
if (num != 8) {
  console.log('good');
}

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(!'text');
console.log(!!'text');
