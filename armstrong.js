function isArmstrongNumber(num) {
    let temp = num;
    let digits = 0;

        while (temp > 0) {
        temp = Math.floor(temp / 10);
        digits++;
    }

    let sum = 0;
    temp = num;

    
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

const number = 943;

if (isArmstrongNumber(number)) {
    console.log(`${number} is an Armstrong number.`);
} else {
    console.log(`${number} is not an Armstrong number.`);
}
