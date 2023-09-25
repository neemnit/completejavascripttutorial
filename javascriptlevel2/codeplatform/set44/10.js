function threeOddNumbers(a){
    let result=false
    let sum=0
    for(let i=0;i<a.length;i++){
        sum+=a[i]
        if(i===2){
            if(sum%2===1){
                result=true
                break
            }
            if(sum%2!=1){
                a.shift()
                sum=0
                i=0-1
            }
        }
    }
    return result

}




console.log(threeOddNumbers([1,2,3,4,5]))
console.log(threeOddNumbers([5,2,1]))
console.log(threeOddNumbers([1,2,3,3,2]))