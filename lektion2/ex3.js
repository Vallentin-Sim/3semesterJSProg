// Svarende til Javas Comparator#compare(...)-metode, skal der laves nogle compare-funktioner,
// der tager to parametre og returnere -1, 0 eller 1 efter om den første parameter er mindre end,
// lig med eller større end den anden parameter.

function compare(s1,s2){
    if (s1 < s2){
        return -1
    } else if (s1 > s2){
        return 1
    } else {
        return 0
    }
}

function compareLen(s1,s2){
    if (s1.length < s2.length){
        return -1
    } else if (s1.length > s2.length){
        return 1
    } else {
        return 0
    }
}

function compareIgnoreCase(s1,s2){
    let str1 = s1.toLowerCase()
    let str2 = s2.toLowerCase()

    if (str1 < str2){
        return -1
    } else if (str1 > str2){
        return 1
    } else {
        return 0
    }
}

console.log("Opgave 2.3 Results:");
// Test af compare funktioner
console.log("Compare 'apple' and 'banana':", compare("apple","banana")); // -1
console.log("Compare 'grape' and 'grape':", compare("grape","grape")); // 0
console.log("Compare 'orange' and 'apple':", compare("orange","apple")); // 1

console.log("Compare length 'apple' and 'banana':", compareLen("apple","banana")); // 0
console.log("Compare length 'kiwi' and 'banana':", compareLen("kiwi","banana")); // -1
console.log("Compare length 'watermelon' and 'banana':", compareLen("watermelon","banana")); // 1

console.log("Compare ignore case 'Apple' and 'apple':", compareIgnoreCase("Apple","apple")); // 0
console.log("Compare ignore case 'banana' and 'Apple':", compareIgnoreCase("banana","Apple")); // 1
console.log("Compare ignore case 'apple' and 'Banana':", compareIgnoreCase("apple","Banana")); // -1