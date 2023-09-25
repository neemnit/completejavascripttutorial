function order(words){
    let result=words.split(' ')
    result.sort()
    console.log(result)
    let arr=[]
    for(let i=0;i<result.length;i++){
        if(result[i].includes('1')){
            arr.unshift(result[i])
        }
        else if(result[i].includes('2')){
            arr.unshift(result[i])
        }
        else if(result[i].includes('3')){
            arr.push(result[i])
        }
        else if(result[i].includes('4')){
            arr.push(result[i])
        }
    }
    return arr
    // ...
  }
  console.log(order('is2 Thi1s T4est 3a'))