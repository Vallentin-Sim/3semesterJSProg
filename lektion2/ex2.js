// Modificere løsningen fra lektion 1 opgave 3, så bubbleSort og binarySearch er hver deres egen funktion.

// Lav en swap funktion som bruges lokalt i bubbleSort funktionen.

let list1 = [2, 5, 7, 3, 7, 8, 9, 3, 1]
let list2 = [4, 6, 3, 9, 2, 1, 5, 8, 7]

function bubbleSort(array) {
    function swap(arr, index1, index2) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array
}

function binarySearch(array, searchedElement) {
    let found = false
    let left = 0
    let right = array.length - 1
    while (!found && left <= right) {
        let i = Math.floor((left + right) / 2)
        if (array[i] == searchedElement) {
            console.log("Found:", array[i])
            found = true
        } else {
            if (array[i] > searchedElement) {
                right = i - 1
            } else if (array[i] < searchedElement) {
                left = i + 1
            }
        }
    }
    if (!found) {
        console.log("Element not found")
    }
}

console.log("Opgave 2.2 Results:");
// Testing the functions for opgave 2.2 list1 and list2
console.log("List1 before sort:", list1.toString())
list1 = bubbleSort(list1)
console.log("List1 after sort:", list1.toString())

console.log("List2 before sort:", list2.toString())
list2 = bubbleSort(list2)
console.log("List2 after sort:", list2.toString())
// Testing binarySearch function
binarySearch(list1, 8)
binarySearch(list2, 10)