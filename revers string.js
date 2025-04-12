//reverse string

function rstr(str){
    return str.split(" ").reverse().join(" ");
}
console.log(rstr("hello every one"));

//revers charactor

function char(str){
    return str.split("").reverse().join("");
}
console.log(char("hello every one"));

//revers number
function rever(num){
    return num.toString().split('').reverse().join('');
}
console.log(rever(12345));