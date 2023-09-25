function capitalize(str){
let arr=[]
let arr1='',arr2=''
for(let i =0;i<str.length;i++){
if(i%2===0){
arr1+=str[i].toUpperCase()
arr2+=str[i].toLowerCase()
}
else{
arr1+=str[i].toLowerCase()
arr2+=str[i].toUpperCase()
}
/*for(let i=0;i<str.length;i++){
    if(i%2!=0)
    arr2+=str[i].toUpperCase()
    else
    arr2+=str[i].toLowerCase()
}*/
 //arr=arr1 +','+arr2
 //arr.push(arr1,arr2)
 //return arr.split(',')
}
return [arr1,arr2]
}
console.log(capitalize('abcdef'))