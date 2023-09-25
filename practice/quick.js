function truncate(str,number){
/*let result = str.split(' ')
let result1=''
for(let i =0;i<number;i++){
  result1+= result[i]



}*/
return str.split(' ').splice(0,number).join(' ')


}

console.log(truncate('The Quick brown fox jumps over the lazy dog',4))