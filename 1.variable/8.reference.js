// single type
let a = 1;
let b = a; // 1
b = 2;
console.log(a);
console.log(b);

// Object type: Copy by Reference (memory address)
let apple = { // 0x1234
    name: 'apple',
}
let orange = apple // 0x1234
orange.name = 'orange';
// apple and orage are pointing to the same memory address
console.log(apple);
console.log(orange);
