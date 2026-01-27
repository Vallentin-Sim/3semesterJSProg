let array = [2,5,7,3,7,8,9,3,1]
console.log(array.toString())
// bubblesort
for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
}
// sorteret array
console.log(array.toString())
// binær søgning
let found = false
let left = 0
let right = array.length - 1
let searchedElement = 8

while (!found && left <= right){
    let i = Math.floor((left + right) / 2)
    
    if (array[i] == searchedElement){
        console.log("Found:", array[i])
        found = true
    } else {
        if (array[i] > searchedElement){
            // Target is smaller, search left half
            right = i - 1
        } else if (array[i] < searchedElement){
            // Target is larger, search right half
            left = i + 1
        }
    }
}

if (!found){
    console.log("Element not found")
}