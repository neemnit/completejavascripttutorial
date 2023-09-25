function string_endsWith(str,match){
  let temp=  str.toUpperCase().split(' ')
//let temp= str.split(' ')
for(let i=0;i<temp.length;i++){
if(temp[i]== match)
return true

}
return false


}
console.log(string_endsWith('JS Php python','PYTHON'))