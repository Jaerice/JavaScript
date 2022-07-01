// Conditional Statement
// switch
// if else if else if ... else
let day = 6; // 0:mon, 1:tues... 6:Sun
let dayName;

if(day === 0) {
    dayName = 'Monday';
} else if(day === 1) {
    dayName = 'Tuesday';
} else {
    dayName = 'Wensday'
}

switch(day) {
    case 0:
        dayName = 'Mon';
        break;
    case 1:
        dayName = 'Wensday';
        break;
    default:
        console.log('nothing match');
}
console.log(dayName);

let condition = 'bad'; // okay, good, bad
let text;
switch(condition) {
    case 'okay':
    case 'good':
        text = 'good';
        break;
    case 'bad':
        text = 'bad'
}
console.log(text);
