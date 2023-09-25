function digital_root(n) {
    if(n>9 || n<100){
        let rem=n%10
    console.log(rem)
        let div=n/10
    
        let sum=rem+div
       // console.log(sum)
    
     }
      return sum
    }

  
  console.log(digital_root(12))