function evenOdd(arr){
const even=[], odd=[]
arr.forEach(function(ele){
    if(ele%2===0){
        even.push(ele)
    }
    else{
        odd.push(ele)
    }
})
return [even,odd]



}
console.log(evenOdd([1,2,3,4,5,6]))