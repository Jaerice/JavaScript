// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다
const fruits = ['a', 'b', 'c', 'd'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2, 8];
const [y, x, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', 'red'];
}
const [title, color] = createEmoji();
console.log(title);
console.log(color);

const jae = { name: 'jae', age: 20, job: 's/w' };
function display({ name, age, job }) {
  console.log('name', name);
  console.log('age', age);
  console.log('job', job);
}
display(jae);

const { name, age, job: occupation, pet = 'dog' } = jae;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);
