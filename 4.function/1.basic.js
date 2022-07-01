function add(a, b) {
  console.log('function');
  return a + b;
}

let result = add(1, 3);
console.log(result);

let lastName = 'Kim';
let firstName = 'Jisu';

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(fullName(firstName, lastName));
