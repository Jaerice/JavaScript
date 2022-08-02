// map - keys, values
// 값은 순서 상관없이 중복가능

const map = new Map([
  ['key1', 'apple'],
  ['key2', 'banana'],
]);

// check size
console.log(map.size);

// isExist
console.log(map.has('key1'));
console.log(map.has('key6'));

// loop
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// search
console.log(map.get('key1'));
console.log(map.get('key4'));

// add
map.set('key3', 'kiwi');
console.log(map);

// delete
map.delete('key3');
console.log(map);

// clear
map.clear();
console.log(map);

// what is the different between obejct and map?
const key = { name: 'milk', price: 10 };
const milk = { name: 'mile', price: 10, description: 'good' };
const obj = {
  [key]: milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]);
console.log(map2[key]);
console.log(map2.get(key));
