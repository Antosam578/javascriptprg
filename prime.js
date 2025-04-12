// type 1
let a=10;
for (let i=2; i<a; i++) {
    if (a%i == 0) {
        console.log(" not prime number ")
        return;

    } 
else {
console.log("primme number")
return;
}
}
//type 2
const number = 2;
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");}
else if (number > 1) {   
    for (let i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            isPrime = false;
            break; }  }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
else {
    console.log("The number is not a prime number.");
}
