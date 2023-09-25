function palindrome(str){
let temp=''
for(let i=str.length-1;i>=0;i--){
 temp += str[i]
}

if(temp === str){
return true
}

//else{
    //return false
//}
}
console.log(palindrome('madam'))