function removedubs(arr){
    let result =[]
for(let i=0;i<arr.length;i++){
if(!result.includes(arr[i])){
    result.push(arr[i])
}
//else{
//result.push(arr[i])
//}
}
return result
}
console.log(removedubs([1,0,1,0]))