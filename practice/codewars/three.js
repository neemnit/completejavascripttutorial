function sortArray(array) {
    let even=[],odd=[],result=[]
    let sort
    for(let i=0;i<array.length;i++){
        if(array[i]%2!=0){
            odd.push(array[i])
            
        }
        
        else{
            even.push(array[i])
        }
        sort=odd.sort()
    }
    for(let i=0;i<array.length;i++){
        if(array[i]%2===0){
            for(let j=0;j<even.length;j++){
                result.splice(i,0,even[j])
            }
        }else{
            for(let j=0;j<sort.length;j++){
                result.splice(i,0,sort[j])
            }
        }
    }
    return result
    
    

  // return min.sort()
}

 // }
  console.log(sortArray([7,1]))
  console.log(sortArray([5,8,6,3,4]))