function count(str){
let result = str.split(' ')
let count =0
for(let i =0;i<result.length;i++){
if(result[i]==='the' || result[i]==='The')
count +=1

}
return count

}



console.log(count('The quick brown fox jumps over the lazy dog','the'))