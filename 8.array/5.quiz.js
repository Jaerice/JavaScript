// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['ba', 'st', 'gr', 'st']
// ouput: ['ba', 'ki', 'gr', 'ki]
function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}
const array = ['ba', 'st', 'gr', 'st'];
const result = replace(array, 'st', 'ki');
console.log(result);

// 퀴즈2: 배열과 특정한 요소를 전달받아, 그 요소가 몇개가 있는지 카운트 하는 함수
// input: ['ba', 'ki', 'gr', 'ki], 'ki'
// ouput: 2
function count(arr, name) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === name) {
      counter++;
    }
  }
  return counter;
}
let arr2 = ['ba', 'ki', 'gr', 'ki'];
let name2 = 'ki';
console.log(count(arr2, name2));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['ba', 'ki', 'gr'], ['ba', 'st', 'gr', 'st']
// ouput: ['ba', 'gr']
function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}
let arr3 = ['ba', 'ki', 'gr'];
let arr4 = ['ba', 'st', 'gr', 'st'];
console.log(match(arr3, arr4));
