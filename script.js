// Display Numbers from 1 to 100
const allNumbers = [];
for (let i = 1; i <= 100; i++) {
    allNumbers.push(i);
}
document.querySelector('#all-numbers pre').textContent = allNumbers.join(', ');

// Display Odd Numbers from 1 to 100
const oddNumbers = [];
for (let i = 1; i <= 100; i += 2) {
    oddNumbers.push(i);
}
document.querySelector('#odd-numbers pre').textContent = oddNumbers.join(', ');

// Display Even Numbers from 1 to 100
const evenNumbers = [];
for (let i = 2; i <= 100; i += 2) {
    evenNumbers.push(i);
}
document.querySelector('#even-numbers pre').textContent = evenNumbers.join(', ');

// Display Prime Numbers from 1 to 100
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const primeNumbers = [];
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        primeNumbers.push(i);
    }
}
document.querySelector('#prime-numbers pre').textContent = primeNumbers.join(', ');