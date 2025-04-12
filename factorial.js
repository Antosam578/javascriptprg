function factorial(num){ 
if (num < 0){
    console.log("negative number");
    return;
}
else if (num == 0){
    console.log("zero")
    return 1;
}
else if (num > 0){
    let fact = 1;
    for ( i = 2; i<=num; i++ ){
        fact *= i;
    }
    return fact;
}
}
console.log(factorial(10))