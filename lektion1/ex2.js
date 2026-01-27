let array = [2,5,7,3,7,8,9,3,1]
console.log(array.toString)
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
console.log(array.toString)
// binær søgning
let found = false
let i = Math.floor(array.length/2)
let left = 0
let right = array.length-1
let searchedElement = 8

while (!found && i >= 1){
    if (array[i] == searchedElement){
        console.log(array[i])
        found = true
    } else {
        if (array[i] > searchedElement){
            // Halvere venstre side tjek variabler
            
        } else if (array[i] < searchedElement){
            // Halvere højreside tjek variabler
        
        }
    }
}