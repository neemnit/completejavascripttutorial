let str ='mohaaMheagalkjG'
let result =[]
let re
result= (str.split(''))
for(let i=0;i<result.length;i++){
if(result[i]==result[i].toUpperCase())
{
re = i
}


}
console.log(re)

   result.splice(re,0,'-')


console.log(result)
console.log(result.join(''))
//console.log(result.toString())




//let arr =[]
//for(let i=0;i<str.length;i++){
//if(str[i]==str[i].toUpperCase()){
 // arr = (str.split(str[i].toUpperCase()))
 //arr.splice(1,0,' ')
 //console.log(arr)
 //console.log(arr)
 //console.log(arr.join(' '))


