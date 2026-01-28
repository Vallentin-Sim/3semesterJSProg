// Opgave 2.1, Lav følgende funktioner: max(array), contains(array, element), sum(array)

function max(array) {
    let maxValue = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }

    return maxValue;
}

function contains(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }

    return false;
}

function sum(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }

    return total;
}

console.log("Opgave 2.1 Results:");
let array = [10,20,30,40,50];

console.log("Array: " + array.toString());
console.log("Max value: " + max(array)); // 50
console.log("Contains 30: " + contains(array, 30)); // true
console.log("Contains 15: " + contains(array, 15)); // false
console.log("Sum: " + sum(array)); // 150