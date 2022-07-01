// parameters default value is undefined
// parameters information will store in the arguments object
// Default Parameters a = 1, b = 1, if there is no parameters witch is undefined
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments[0]);
  console.log(arguments[1]);
  return a + b;
}
add();

// Rest parameters
// when you don't know how many parameters will get
// paratemers can be array type: ...numbers
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7);
