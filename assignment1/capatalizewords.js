function change(str){
let result =str[0].toUpperCase()
for(let i=1;i<str.length;i++){
let currentCharacter,previousCharacter= str[i-1]
if(previousCharacter && previousCharacter == ' '){
currentCharacter = str[i].toUpperCase()
}
else{
currentCharacter =str[i]
}
result =result + currentCharacter
}
return result
}
console.log(change(' js string excercise'))
console.log(change(' dct academy '))