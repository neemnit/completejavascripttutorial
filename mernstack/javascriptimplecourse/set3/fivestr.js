function spinWords(string){
   let result=string.split(' ') 
   let reves=''
   //console.log(result)
   for(let i=0;i<result.length;i++){
if(result[i].length>=5){
    console.log(result[i].split(''))
    //reves+=result[i].reverse()
}
//else{
    reves+= result[i]
//}

   }
   //return reves
  }
  console.log(spinWords('welcome to vs codeing'))
  /*let str=['first','last','gupta']
  for(let i=0;i<str.length;i++){
    
  console.log(str[i][i].reverse())
  }*/
