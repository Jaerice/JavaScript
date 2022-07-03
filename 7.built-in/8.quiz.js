// Quiz!
// 1. print all the characters in a string
const text = 'Hello World!';
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
  console.log(text.charAt(i));
}

// 2. divides a string into an ordered list of substrings
// ['user1', 'user2', 'user3', 'user4']
const ids = 'user1, user2, user3, user4';
const array = ids.split(', ');
console.log(array);

// 3. 1초에 한번씩 시계를 (날짜포함) 출력해보자
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString('ko-KR'));
}, 1000);
