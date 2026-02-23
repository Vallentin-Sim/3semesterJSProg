// Opgave 8.1
const persons = [{name: "John", age: 30, mobilenumber: "12345678"},
                 {name: "Jane", age: 25, mobilenumber: "09876543"},
                 {name: "Doe", age: 20, mobilenumber: "11223344"},
                 {name: "Smith", age: 35, mobilenumber: "55667788"},
                 {name: "Emily", age: 28, mobilenumber: "66778899"},
                 {name: "Michael", age: 40, mobilenumber: "77889900"},
                 {name: "Sarah", age: 22, mobilenumber: "88990011"},
                 {name: "David", age: 32, mobilenumber: "99001122"},
                 {name: "Anna", age: 27, mobilenumber: "00112233"},
                 {name: "Tom", age: 29, mobilenumber: "11223344"}];

const findPersonNumber = persons.find(person => person.mobilenumber === "09876543");
console.log(findPersonNumber);

const findPersonMinAge = persons.reduce((min, person) => person.age < min.age ? person : min, persons[0]);
console.log(findPersonMinAge);

const addUniqueIdToPersons = persons.map((person, index) => ({...person, id: index + 1}));
console.log(addUniqueIdToPersons);

// Opgave 8.2
function compareSort(array){
    return function(array, compare) {
        return array.sort(compare);
    };
}


function compare(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

function ifUndefinedOrMissingValues(){
    if (compare.a === undefined || compare.b === undefined) {
        throw new Error("Undefined values are not allowed for comparison.");
    } else if (compare.a === null || compare.b === null) {
        throw new Error("Null values are not allowed for comparison.");
    } else if (typeof compare.a !== typeof compare.b) {
        throw new Error("Values of different types cannot be compared.");
    } 
}

function compareSortAge(compare = ifUndefinedOrMissingValues){
    const sortedPersons = persons.sort((a, b) => compare(a.age, b.age));
    return sortedPersons;
}

function compareSortName(compare = ifUndefinedOrMissingValues){
    const sortedPersons = persons.sort((a, b) => compare(a.name, b.name));
    return sortedPersons;
}

function compareLength(compare = ifUndefinedOrMissingValues){
    const sortedPersons = persons.sort((a, b) => compare(a.name.length, b.name.length));
    return sortedPersons;
}

function compareIgnoreCaseSort(compare = ifUndefinedOrMissingValues){
    const sortedPersons = persons.sort((a, b) => compare(a.name.toLowerCase(), b.name.toLowerCase()));
    return sortedPersons;
}

console.log("Original array:");
console.log(persons);
console.log("Sorted by age:");
console.log(compareSortAge(compare));
console.log("Sorted by name:");
console.log(compareSortName(compare));
console.log("Sorted by name length:");
console.log(compareLength(compare));
console.log("Sorted by name (ignore case):");
console.log(compareIgnoreCaseSort(compare));

// Opgave 8.3

