function swapcase(m){
let result=''
for(let i =0;i<m.length;i++){
if(m[i]===m[i].toUpperCase()){
result += m[i].toLowerCase()
}
else
result += m[i].toUpperCase()
}
return result
}






console.log(swapcase(' AaBbc'))