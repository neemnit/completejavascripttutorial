/*write a javascript program to count the occurrences of each of the vowel in the given 
string*///{a:2,e:0,i:1,o:0,u:0}
function vowelOccurence(str){
    const result={a:0,e:0,i:0,o:0,u:0}
    str=str.toLowerCase()
    for(const char of str){
        if(result.hasOwnProperty(char)){
            result[char]= result[char] +1
           //console.log(result[char])
        }
    }
    return result
}
console.log(vowelOccurence('javascript'))

console.log(vowelOccurence('aieou'))