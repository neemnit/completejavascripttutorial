function isIsogram(str){
   let str1= str.toLowerCase()
    let result=true
    for(let i=0;i<str1.length;i++){
        if(str1.indexOf(str1[i])!=str1.lastIndexOf(str1[i])){
            result=false
            break
        }
    }
    return result
    
  }



  console.log(isIsogram ('abcda'))
  /*const fruits=['ap','ma','gd']
  console.log(fruits.indexOf('ap'))*/