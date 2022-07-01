// callback function
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 이 함수에서는 무슨 일을 할까요?
// 계산기 함수는 a and b 전달 받고, 특별하게 액션이라는 함수를 전달 받는다
// 여기서 action은 외부로부터 주어진 함수인데 이것들 콜백 함수라고 한다
// 함수를 바로 호출 하는 것이 아니라, action reference만 전달박고 내부에서 호출

// 전달된 action은 콜백함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수안에서 필요한 순가에 호출이 나중에 됨
// 함수 내부에서는 정의하는 시점에서 action이 어떤 함수를 레퍼런스 하는지 모른다
function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
  return result;
}
calculator(1, 2, add); // add는 호출이 아닌 reference만 전달받음
calculator(1, 2, multiply);
