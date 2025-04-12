function fibonacci(n: number) {
    let a = 1;
    let b = 2;

    for (let index = 0; index < n; index++) {
        const c = a + b;
        a = b;
        b = c;

    }
    if (n === 0) {
        return n;
    }
    else {
        return b;
    }

}

console.log(`fibonacci(0): ${fibonacci(0)}`);
console.log(`fibonacci(1): ${fibonacci(1)}`); 
console.log(`fibonacci(2): ${fibonacci(2)}`);
console.log(`fibonacci(3): ${fibonacci(3)}`);
console.log(`fibonacci(4): ${fibonacci(4)}`);
console.log(`fibonacci(5): ${fibonacci(5)}`);
console.log(`fibonacci(6): ${fibonacci(6)}`);