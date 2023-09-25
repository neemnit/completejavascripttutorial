function string_parameterize(arr){
let result =''
let arri=[]
for(let i =0;i<arr.length;i++){
result += arr[i].toLowerCase()
}
arri= result.split(' ')
arri=arri.join('-')
return arri

}

console.log(string_parameterize("Robin Singh From USA"))