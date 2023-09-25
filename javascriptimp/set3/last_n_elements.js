function last(arr,n){
    let result=[]
if(n === undefined){
result= arr[arr.length-1]
return result
}
else{
    result =arr.slice(-n)
    return result
}


}
console.log(last([7,9,0,-2]))

console.log(last([7,9,0,2],3))