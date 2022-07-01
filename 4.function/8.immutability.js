// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 똥
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함
// primitive, object
function display(num) {
  num = 5;
  console.log(num);
}
const value = 4;
display(value);
console.log(value);

function changeNameObj(obj) {
  //   obj.name = 'Bob'; // NO NO NO
  //   console.log(obj);
  return { ...obj, name: 'Bob' }; //
}
const ellie = { name: 'Ellie' };
changeNameObj(ellie);
console.log(ellie);
