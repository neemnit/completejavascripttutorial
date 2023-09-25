/* write a javascript program to find the occurrences of characters in the given string*/
function frequency(str){
    const result={}
   /* for(const char of str){
        if(result.hasOwnProperty(char)){
            result[char]= result[char]+1
        }else{
            result[char]=1
        }
    }
    return result

}*/
str.forEach(element => {
    if(result.hasOwnProperty(element)){
        result[element]=result[element]+1
    }
    else{
        result[element]=1
    }
    
});
return result
}
console.log(frequency('dctdcd'))