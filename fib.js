//Using iteration to create a function fib which returns an array with the n first integers of the fib sequence

function fibs(n) {
    let array = [0, 1];
    if (n === 0) {
        return []
    } else if (n === 1) {
        return [0]
    } else if (n === 2) {
        return [0, 1];
    } else {
        for (let i = 2; i < n; i++) {
            array.push(array[array.length - 1] + array[array.length - 2]);
        };
    }

    
    return array
}

console.log(fibs(8));