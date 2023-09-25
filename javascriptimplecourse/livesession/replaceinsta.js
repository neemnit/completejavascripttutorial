function doubleSwap(str,c1,c2){
let result=''
for(let i =0;i<str.length;i++){
if(str[i]===c1){
result+=c2
}
else if(str[i]===c2){
result+=c1
}
else{
    result+=str[i]
}
}
return result
}
console.log(doubleSwap('random w#rds writt&n h&r&','#','&'))
console.log(doubleSwap('128 895 556 788 999','8','9'))