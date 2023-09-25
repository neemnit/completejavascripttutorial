function getMiddle(s)
{
    let length=s.length
    let char=''
    let le=0
    if(length%2!=0){
  le=  ((length+1))/2
  char=s[le-1]
    
    return char}
  //Code goes here 
  else{
      le=(length)/2
      char+=s[le-1] +s[le]
return char
  }
}


console.log(getMiddle('testingrt'))
console.log(getMiddle('test'))
console.log(getMiddle('mid'))