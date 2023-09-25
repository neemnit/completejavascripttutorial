function sayAgain(str,m){
 let stri = ''
 for(let i=m;i>0;i--){
 stri += str

}
return stri
}

console.log(sayAgain("hi",4))
console.log(sayAgain('he',0))