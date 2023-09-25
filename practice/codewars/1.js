function divisors(integer) {
    let number=integer
    let result=[]
    for(let i=2;i<number;i++){
      if( integer%i===0){
     result.push(i)
      }
    }
      if(result.length>0){
         return result
      }
      else{
          return `${integer} is prime`
      }
   // }
   // return result
    
  }
  console.log(divisors(13))