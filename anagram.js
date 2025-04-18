function anagram (a,b){
    
    if (a.length == b.length){
        const str1 = a.split('').sort().join('');
        const str2 = b.split('').sort().join('');
        if (str1===str2){
            return("its a anagram");
        }
        else {
            return("its not anagram");
            
        }
    }
    else {
        return("its not anagram");
        
    }
   
}
const result1= console.log(anagram('silent','lisent'));