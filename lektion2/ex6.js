console.log('--- Opgave 2.6 ---');

let swap = `function swap(i,j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}`;

let stack = [];

let slutbegyndbrackets = {
    ')': '(',
    ']': '[',
    '}': '{'
};

let balanced = true;

for (let i = 0; i < swap.length; i++) {
    const char = swap[i];
    if (Object.values(slutbegyndbrackets).includes(char)) {
        stack.push(char);
    } else if (char in slutbegyndbrackets && slutbegyndbrackets[char] !== stack.pop()) {
        balanced = false;
        console.log(`Error at position ${i} with '${char}'`);
        break;
    }
}
if (stack.length !== 0) {
    balanced = false;
    console.log('Error - stack is not empty:', stack);
} if (balanced) console.log('Balanced');

console.log('--- End of opgave 2.6 ---');