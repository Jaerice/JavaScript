// let: Reaasignalbe
let a = 1;
a = 2;

// const: Mutable
const text = 'hello';
// text = 'hi'; -> bad

// 1. constant variable
const MAX_FRUITS = 5;

// 2. constant object
const apple = {
    name: 'apple',
    color: 'red',
};
console.log(apple);
apple.name = 'orange';
apple.color = 'yellow';
console.log(apple);