// function name() {}
// const name = function () {}
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// const name = function () { }
add = function (a, b) {
  return a + b;
}; // if gava a function name? referenceError: defined
console.log(add(1, 2));

// 많이 사용되어지는 표현식은 아님
// 정의만 해놓고 실행하지 않는 함수는 호출이 되지 않는다
function run() {
  console.log('hello');
}
// 그런데 위에 함수를 괄호로 묶으면 함수가 값으로 변환이 된다
// IIFE (Immedicately-Invoked Function Expressions)
(function run() {
  console.log('hello');
})();

// const name = () ⇒ { }
add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));
// if only return value
add = (a, b) => a + b;
