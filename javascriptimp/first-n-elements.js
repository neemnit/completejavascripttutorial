function first(arr,n){
let result
if(n=== undefined){
result =arr[0]
}else if(n<0){
result =arr.slice(0)
}else{
result =arr.slice(0,n)
}
return result
}
console.log(first([7,9,0,-2]))