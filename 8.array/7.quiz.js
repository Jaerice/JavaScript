// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['ba', 'st', 'gr', 'st']
// ouput: ['ba', 'ki', 'gr', 'ki]
function replace(array, from, to) {
  return array.map((item) => (item === from ? to : item));
  //   const replaced = Array.from(array);
  //   for (let i = 0; i < replaced.length; i++) {
  //     if (replaced[i] === from) {
  //       replaced[i] = to;
  //     }
  //   }
  //   return replaced;
}
const array = ['ba', 'st', 'gr', 'st'];
const result = replace(array, 'st', 'ki');
console.log(result);

// 퀴즈2: 배열과 특정한 요소를 전달받아, 그 요소가 몇개가 있는지 카운트 하는 함수
// input: ['ba', 'ki', 'gr', 'ki], 'ki'
// ouput: 2
function count(array, item) {
  return array.filter((value) => value === item).length;
  //   return arr.reduce((count, value) => {
  //     if (value === item) {
  //       count++;
  //     }
  //     return count;
  //   }, 0);
}
let arr2 = ['ba', 'ki', 'gr', 'ki'];
let name2 = 'ki';
console.log(count(arr2, name2));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['ba', 'ki', 'gr'], ['ba', 'st', 'gr', 'st']
// ouput: ['ba', 'gr']
function match(input, search) {
  return input.filter((item) => search.includes(item));
  //   const result = [];
  //   for (let i = 0; i < input.length; i++) {
  //     if (search.includes(input[i])) {
  //       result.push(input[i]);
  //     }
  //   }
  //   return result;
}
let arr3 = ['ba', 'ki', 'gr'];
let arr4 = ['ba', 'st', 'gr', 'st'];
console.log(match(arr3, arr4));

// 퀴즈 5
// 5이상 보다 큰 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
const result2 = nums //
  .filter((num) => num > 5) // [16, 25, 34, 21]
  .reduce((avg, num, _, array) => avg + num / array.length, 0);
console.log(result2);
