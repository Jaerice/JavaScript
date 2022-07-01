// Quiz
let num = 2;
// num is even number good, odd number bad
// if
if(num % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}
// ternary
num % 2 === 0 ? console.log('even') : console.log('odd');
// repeat console.log -> how to make it more simple
let evenOdd = num % 2 === 0 ? 'even' : 'odd';
console.log(evenOdd);