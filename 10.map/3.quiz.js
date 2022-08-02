// 주어진 배열에서 중복을 제거 하라
const fruits = ['ba', 'ap', 'gr', 'ba', 'ap', 'pe'];
function removeDuplication(array) {
  return [...new Set(array)];
}
console.log(removeDuplication(fruits));

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findIntersecion(set1, set2) {
  //   const array = [...set1].filter((item) => set2.has(item));
  //   return new Set(array);
  return new Set([...set1].filter((item) => set2.has(item)));
}
console.log(findIntersecion(set1, set2));
