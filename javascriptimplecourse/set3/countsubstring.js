function count(str,search)
{
    let count=0

     str=str.toLowerCase()
   const result= str.split(' ')
    for(let i=0;i<result.length;i++){
if(result[i]== search){
count+=1

    }
}
return count
}
console.log(count('The quick brown fox jumps over the lady dog','the'))
console.log(count('The quick brown fox jumps over the lady dog','fox'))