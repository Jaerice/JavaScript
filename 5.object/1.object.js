/**
 * how to make an Object?
 * 1. Obejct literal { key: value }
 * 2. use object class => new Object()
 * 3. Object.create();
 */

// use object literal
// key - char, number, string, symbol
// value - primitive, object (function)
let apple = {
  name: 'apple',
  'hello-bye': 'Hi',
  0: 1,
  ['hello-bye1']: 'Hi',
};

// how to access to object property?
apple.name; // . notation
console.log(apple['hello-bye']); // bracket notation
apple['name'];
// how to add property?
apple.color = 'red';
console.log(apple.color);
console.log(apple['color']);
// how to delete property?
delete apple.color;
console.log(apple);

// use object class => new Object()
const myCar1 = new Object();
myCar1.make = 'Toyota';
myCar1.model = 'Camery';
myCar1.year = 1969;
console.log(myCar1);

// use object initializer which is a comma-delimited with curly braces
const myCar2 = {
  make: 'Toyota',
  model: 'Camery',
  year: 1979,
};
console.log(myCar2);

// for...in to iterate over all the enumerable properties of an object
function showProps(obj, objName) {
  let result = '';
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}
showProps(myCar1, 'myCar1');
