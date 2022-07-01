// Loop statement
// for( ; ; ) { }
// 1. variable
// 2. if true { } codeblack
// 3. i++
// 4. repeating 2, 3 untill condition is false

for(let i = 0; i < 5; i++) {
    console.log(i);
}

for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
        console.log(i, j);
    }
}

// continue, break;
for (let i = 0; i < 20; i++) {
    if (i === 10) {
        console.log('i is 10');
        // continue;
        break;
    }
    console.log(i);
}