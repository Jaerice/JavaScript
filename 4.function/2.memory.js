function add(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}
const sum = add;

// add is pointing to 0X11 memory address
// sum also pointing to 0X11 memory address
// 0X11 is porint to 'retun a + b' address

// console.log(sum(1, 2));
console.log(add());
