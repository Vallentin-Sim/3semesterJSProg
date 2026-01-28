// Lav en string med en længere tekst.
// Anvend dernæst et objekt af som en map til at beregne antallet af de forskellige ord i teksten.
// Brug metoden split(" ") til at opdele teksten i ord.

let testString = "Dette er en test string. Dette string er kun en test string for at tælle antallet af ord i denne test string."

function countsWords(testString) {
    let wordCountMap = {}

    let words = testString.split(" ")
    for (let i of words) {
        let word = i.toLowerCase()
        if (wordCountMap[word]) {
            wordCountMap[word] += 1
        } else {
            wordCountMap[word] = 1
        }
    }
    return wordCountMap
}
console.log("Opgave 2.4 Results:");
console.log("Word counts:", countsWords(testString));
