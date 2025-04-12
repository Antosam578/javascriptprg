const number = 55;
let n1,n2,n3;
n1=0;
n2=1;
console.log('fibonacci series: '  );
console.log(n1);
console.log(n2);
n3= n1 + n2;
while (n3<=number){
    console.log(n3);
    n1=n2;
    n2=n3;
    n3=n1+n2;
}