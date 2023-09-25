function max(arr){
let max=arr[0]
for(let i=1;i<arr.length;i++){
if(max<arr[i])
max=arr[i]
}
return max


}
console.log(max([12,34,56,1]))
console.log(max([-12,-34,-56,-1]))
console.log(max([-12,-34,-56,1]))