function spinWords(string){
   let result=string.split(' ') 
   console.log(result.join(' '))
   let reves=[]
   //console.log(result)
   for(let i=0;i<result.length;i++){
if(result[i].length>=5){
    reves.push(result[i].split('').reverse().join(''))

    //console.log(reves)
}
else{
    reves.push( result[i])
}

   }   //emoclew to vs gnidoc
   return reves.join(' ')
  }
  console.log(spinWords('welcome to vs coding'))
  /*let str=['first','last','gupta']
  for(let i=0;i<str.length;i++){
    
  console.log(str[i][i].reverse())
  }*/
