// array - 인덱스로 이루어진 데이터 저장소, 중복 가능
// set - 데이터 집합체, 순서 없고, 중복 불가
const set = new Set([1, 2, 3]);
console.log(set);

console.log(set.size);
console.log(set.has(2)); // true
console.log(set.has(6)); // false

// loop
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

// add
set.add(6);
console.log(set);
set.add(6); // ignore because no duplication for set
console.log(set);

// delete
set.delete(6);
console.log(set);

// all delete
set.clear();
console.log(set);

// object set
const obj1 = { name: 'apple', price: 8 };
const obj2 = { name: 'banana', price: 3 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// quiz
obj1.price = 10;
objs.add(obj1);
console.log(objs);

// quiz
const obj3 = { name: 'banana', price: 3 };
objs.add(obj3);
console.log(objs);
