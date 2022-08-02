// Spread 연산자, 전개구문
// 모든 Interable은 Spread 될 수 있다
// 순회가 가능한 모든 것들은 촤르르륵 펼쳐 질 수 있다
// func(...iterable)
// [...iterable]
// { ...obj }
// EcmaScript 2018
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
// add(nums[0], nums[1], nums[2]);
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 0, 1, 2, 4);

// Array Concat
const fruits1 = ['ap', 'ki'];
const fruits2 = ['st', 'ba'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, 'st', ...fruits2];
console.log(arr);

// Object
const jae = { name: 'jae', age: 20, home: { address: 'home' } };
const updated = {
  ...jae,
  jab: 's/w',
};
console.log(updated);
console.log(jae);
