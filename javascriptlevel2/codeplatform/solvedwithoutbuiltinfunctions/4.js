/*function min(a) {
    
    let minimum=a[0]
    for(let i=1;i<a.length;i++){
        if(a[i]<minimum){
            minimum=a[i]
        }
    }
    return minimum
   // return result
}
console.log(min([0,12,3,-3]))*/
let result=[3,4,5,6]
console.log(Math.min(...result))