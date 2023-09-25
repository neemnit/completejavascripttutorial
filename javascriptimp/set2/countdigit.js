function countdigit(digit){
let result=0
digit=String(digit)
for(let i=0;i<digit.length;i++){
result+=parseInt(digit[i])

}
return result

}
console.log(countdigit(1947))