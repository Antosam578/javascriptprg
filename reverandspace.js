let input = "my name is monisha";

function moni(str){
    let result = [];
    let chart = str.replace(/\s/g,'').split('').reverse();
    let intex = 0;
    for (let char of str){
        if (char === ' '){
            result.push(' ');
                    }
    else {
        result.push(chart[intex]);
        intex++;
    }
                }
                return result.join(``);
   
    } 
    let rstr  = moni(input);
    
    console.log(rstr);