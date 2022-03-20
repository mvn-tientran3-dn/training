// Exercise 1
function sum(a = 0, b = 0) {
    if (+a === +b) {
        return (+a + +b) * 3;
    }

    return +a + +b;
}

console.log('--- Exercise 1: ---');
console.log(sum(5, '10'));
console.log(sum(5, 5));

// Exercise 2
function diffNum(number = 0) {
    if (+number <= 19) {
        return (19 - +number);
    }

    return (+number - 19) * 3;
}

console.log('--- Exercise 2: ---');
console.log(diffNum('12'));
console.log(diffNum(19));
console.log(diffNum('22'));

// Exercise 3
// Exercise 4
function findValuesDivByN(str = '', n = 0) {
    let results = [];

    if (!str || !n) {
        return results;
    }

    for (let i = 0; i <= 9; i++) {
        let number = str.replace('*', i);

        if (number % n === 0) {
            results.push(number);
        }
    }

    return results;
}

console.log('--- Exercise 3: ---');
console.log(findValuesDivByN('1*9', 3));
console.log(findValuesDivByN('1234567890*', 3));

console.log('--- Exercise 4: ---');
console.log(findValuesDivByN('1*9', 6));
console.log(findValuesDivByN('1234567890*', 6));
