// Lav et program, der udskriver alle primtal op til og med et givet positivt heltal n.
// Et primtal er et tal, der kun er deleligt med 1 og sig selv.
let n = 30;
console.log(`Primtal op til og med ${n}:`);
for (let num = 2; num <= n; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}