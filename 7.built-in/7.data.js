// UTC기준
console.log(new Date());
console.log(new Date('June 5, 2022'));
console.log(new Date('2022-12-17T03:24:00'));

console.log(Date.now());
console.log(Date.parse('2022-12-17T03:24:00'));

const now = new Date();
now.setFullYear(2022);
now.setMonth(6); // 0: 1
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate()); // 0: 1
console.log(now.getDay()); // 0 Mon, 1... 6: Sat
console.log(now.getTime());
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
console.log(now.toLocaleString('en-Us'));
console.log(now.toLocaleString('ko-KR'));
