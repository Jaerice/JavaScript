// array methods
// key point!
// 1. update an arry
// 2. return new arry
const fruits = ['1', '2', '3', '4'];

// check if the object is an array
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// find index of certain item
console.log(fruits.indexOf('1'));

// check if the item in the array
console.log(fruits.includes('1'));

// add - to the end
let length = fruits.push('12'); // update array
console.log(fruits);
console.log(length);

// add - to the front
length = fruits.unshift('123'); // update array
console.log(fruits);
console.log(length);

// delete - to the end
let lastItem = fruits.pop(); // return removed itme
console.log(fruits);
console.log(lastItem);

// delete - to the front
lastItem = fruits.shift();
console.log(fruits);
console.log(lastItem);

// add, delete - in the middle of array
const deleted = fruits.splice(1, 1);
console.log(fruits); // update array
console.log(deleted);
fruits.splice(1, 0, '2');
console.log(fruits);

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2); // get index 0, 1
console.log(newArr);
console.log(fruits);
newArr = fruits.slice(-1);
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// reverse an array
const arr4 = arr3.reverse();
console.log(arr4);
console.clear();

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr);
console.log(arr.flat(2));
arr = arr.flat(3);

// 특정한 값으로 배열을 채우기
arr.fill(0); // update an array
console.log(arr);

arr.fill('s', 1, 3);
console.log(arr);

arr.fill('a', 1);
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);
text = arr.join(' | ');
console.log(text);
