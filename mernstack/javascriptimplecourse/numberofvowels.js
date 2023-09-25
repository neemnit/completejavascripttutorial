function countVowels(str){
    let count=0
for(let i=0;i<str.length;i++){
if(str[i]=='i' || str[i]=='e' ||str[i]== 'o'||str[i]== 'u' ||str[i]== 'a')
{
count+=1

}

}
return count




}
console.log(countVowels('The quick brown fox'))

console.log(countVowels('javascript is awesome'))