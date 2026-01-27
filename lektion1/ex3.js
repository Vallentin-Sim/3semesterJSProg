let list1 = [2,5,7,3,7,8,9,3,1]
let list2 = [4,6,3,9,2,1,5,8,7]

function bubbleSort(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array
}
console.log("List1 before sort:", list1.toString())
list1 = bubbleSort(list1)
console.log("List1 after sort:", list1.toString())

console.log("List2 before sort:", list2.toString())
list2 = bubbleSort(list2)
console.log("List2 after sort:", list2.toString())

function binarySearch(array, searchedElement) {
    let found = false
    let left = 0
    let right = array.length - 1
    while (!found && left <= right){
        let i = Math.floor((left + right) / 2)
        if (array[i] == searchedElement){
            console.log("Found:", array[i])
            found = true
        } else {
            if (array[i] > searchedElement){
                right = i - 1
            } else if (array[i] < searchedElement){
                left = i + 1
            }
        }
    }
    if (!found){
        console.log("Element not found")
    }
}
binarySearch(list1, 8)
binarySearch(list2, 10)

function mergeLists(list1, list2) {
    let e1 = 0;
    let e2 = 0;
    let result = [];

    while (e1 < list1.length && e2 < list2.length) {
        if (list1[e1] <= list2[e2]) {
            result.push(list1[e1]);
            e1++;
        } else {
            result.push(list2[e2]);
            e2++;
        }
    }

    while (e1 < list1.length) {
        result.push(list1[e1]);
        e1++;
    }

    while (e2 < list2.length) {
        result.push(list2[e2]);
        e2++;
    }

    return result;
}

console.log("Merged list:", mergeLists(list1, list2).toString())