const fruits = ['banana', 'apple', 'peach'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// bad example: add, delete
fruits[3] = 'straberry';
console.log(fruits);

delete fruits[1];
console.log(fruits);
