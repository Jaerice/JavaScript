// while(condition) {}
// loop untill the condition is false
let num = 5;
while (num >= 0) {
    console.log(num);
    num--;
}

let isActive = true;
let i = 0;
while (isActive) {
    console.log('Active');
    if (i === 1000) {
        break;
    }
    i++;
}

// do while
do {
    console.log('do while');
} while (isActive);