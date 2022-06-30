// Unary Operators
// +, -, !
let a = 5;
a = -a; // -1 * 5
console.log(a);
a = -a;
console.log(a);

a = +a;
console.log(a);

a = -a;
a = +a;
console.log(a);

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

// + convert whatever type to number type
console.clear();
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN

// !! convert value into boolean type
console.log(!!1);
